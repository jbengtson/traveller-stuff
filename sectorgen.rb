class SystemBuilder
    # pass in one of "Opera", "Hard", or "Custom" to modify generation
    def initialize(option = 'Base', sectorType = 'Empire')
        @rand = Random.new
        @namer = NameGen.new
		@sectorType = sectorType
        @opera = false
        @hard = false
        @custom = false
        if option.eql? 'Opera' then
            @opera = true
        end
        if option.eql? 'Hard' then
            @opera = true
            @hard = true
        end
        if option.eql? 'Custom' then
            @opera = true
            @hard = true
            @custom = true
        end
    end
    
	def roll(die)
        return (@rand.rand * die).floor + 1
	end 
	
    # roll one six-sided die
    def rollOneD()
        return (@rand.rand * 6).floor + 1
    end
    
    # roll two dice and add them together
    def rollTwoD()
        return rollOneD() + rollOneD()
    end
	
    # roll two dice and add them together, subtract 7, add the value, clamped from 0..15
    def minusSevenVal(val)
        newVal = rollTwoD - 7 + val
        if newVal < 0 then newVal = 0 end
        if newVal > 15 then newVal = 15 end
        return newVal
    end
	
    def rollDTen()
        return (@rand.rand * 10).floor
    end
	
	def rollTwoDThree()
        return ((@rand.rand * 3).floor + 1) + ((@rand.rand * 3).floor + 1)
	end
    
    # return true if the generation option is "Opera"
    def optionOpera()
        return @opera
    end
    
    # return true if the generation option is "Hard"
    def optionHard()
        return @hard
    end
    
    #return true if the generation option is "Custom"
    def optionCustom()
        return @custom
    end
    
    # generate a new system
    def newSystem(hex)
        return System.new(self, @namer, hex, @sectorType)
    end
    
    # Sparse is a positive DRM to the check for system presence, usually 0, -1, -2.
    # (1 for dense, 0 for average, -1 for sparse, and -2 for rift sectors)
    # Values greater than 0 increase the chance, values less than 0 decrease the chance.
    # Values less than -2 will produce no systems, values greater than 2 will always produce a system
    def doSubsector(colOff = 0, rowOff = 0, sparse)
        count = 0
        for c in 1..8 do
            for r in 1..10 do
                if rollOneD() + sparse >= 4 then
                    hexname = (c + colOff).to_s.rjust(2, "0").concat((r + rowOff).to_s.rjust(2, "0"))
                    newSystem(hexname).print()
                    count += 1
                end
            end
        end
        puts '    Worlds: '.concat(count.to_s).concat(', sparse: ').concat(sparse.to_s)
    end
    
    # Sparse defines the sparseness of the sector. It will modify subsector sparseness.
    # Values of greater than 1 or less than -2 are ignored.
    def doSector(sparse)
        if sparse > 1 then sparse = 1 end
        if sparse < -2 then sparse = -2 end

        preface = 'Generating '
		preface.concat(@sectorType)
		preface.concat(' Sector')
        if optionOpera() then
            if optionCustom() then
				puts preface.concat(' using Custom options')
            elsif optionHard() then
				puts preface.concat(' using Hard options')
			else
                puts preface.concat(' using Space Opera options')
            end
        else
            puts preface.concat(' using Normal options')
        end
        
#        for c in 0..3 do
#            for r in 0..3 do
        for c in 0..3 do
            for r in 0..3 do
                puts "#################### Subsector ".concat(c.to_s).concat(',').concat(r.to_s).concat(' ####################')
                subsparse = case rollTwoD() # about a 5% chance of variance either way
                    when 2..3 then sparse - 1
                    when 11..12 then sparse + 1
                    else sparse
                end
                if subsparse > 1 then subsparse = 1 end
                if subsparse < -2 then subsparse = -2 end
                doSubsector(0, 0, subsparse)
            end
        end
    end
end

class NameGen
    def initialize()
        @parts = [
            ["b", "c", "d", "f", "g", "h", "i", "k", "l", "m", "n", "p", "r", "s", "t", "v", "x", "y", "z"],
            ["a", "e", "o", "u", "y"],
            ["w", "q", "j", "br", "cr", "dr", "fr", "gr", "pr", "str", "tr", "bl", "cl", "fl", "gl", "pl", "sl", "sc", "sk", "sm", "sn", "sp", "st", "sw", "ch", "sh", "th", "wh"],
            ["ae", "ai", "ao", "au", "a", "ay", "ea", "ei", "eo", "eu", "e", "ey", "ua", "ue", "ui", "uo", "u", "uy", "ia", "ie", "iu", "io", "iy", "oa", "oe", "ou", "oi", "o", "oy"],
            ["turn", "ter", "nus", "rus", "tania", "hiri", "hines", "gawa", "nides", "carro", "rilia", "stea", "lia", "lea", "ria", "nov", "phus", "mia", "nerth", "wei", "ruta", "tov", "zuno", "vis", "lara", "nia", "liv", "tera", "gantu", "yama", "tune", "ter", "nus", "cury", "bos", "pra", "thea", "nope", "tis", "clite"],
            ["una", "ion", "iea", "iri", "illes", "ides", "agua", "olla", "inda", "eshan", "oria", "ilia", "erth", "arth", "orth", "oth", "illon", "ichi", "ov", "arvis", "ara", "ars", "yke", "yria", "onoe", "ippe", "osie", "one", "ore", "ade", "adus", "urn", "ypso", "ora", "iuq", "orix", "apus", "ion", "eon", "eron", "ao", "omia"]
        ]
        @mtx = [
            [0,0,1,1,4,4],
            [1,1,2,2,5,5],
            [2,2,3,3,4,4],
            [2,2,3,3,5,5],
            [3,3,4,4,0,0,1,1],
            [3,3,0,0,4,4,5,5],
            [2,2,1,1,4,4,5,5],
            [3,3,0,0,1,1,2,2,1,1],
            [2,2,5,5,0,0,4,4]
        ]
        @rand = Random.new
    end
    
    def pickPart(idx)
        return (@rand.rand * @parts[idx].size).floor
    end
    
    def getName()
		name = ''
		comp = @mtx[(@rand.rand * @mtx.size).floor]
		i = 0
		il = (comp.size / 2).floor
		while i < il do
			name.concat(@parts[comp[i * 2]][pickPart(comp[i * 2 + 1])])
            i += 1
        end

		return name.capitalize
    end
end

class System
    #pass in the system builder
    def initialize(sysgen, namegen, hex, sectorType)
        @gen = sysgen
        @hex = hex
        @name = namegen.getName()
        @giant = @gen.rollTwoD() < 11 ? true : false
        if @giant then
            @giants = getGasGiants()
        else
            @giants = 0
        end
        @size = @gen.rollTwoD - 2
        if @size < 1 || @gen.rollTwoD() > 7 then
            @belts = getAsteroidBelts()
        else
            @belts = 0
        end
        @atmo = getAtmosphere(@size)
        @temp = getTemperature(@size, @atmo)
        @hydro = getHydrographics(@size, @atmo, @temp)
        @pop = getPopulation(@size, @atmo, @hydro, sectorType)
        @gov = getGovernment(@pop, sectorType)
        @law = getLawLevel(@pop, @gov)
        if @pop < 1 then
            @gov = 0
            @law = 0
        end
        @port = getStarport(@pop, @atmo, sectorType)
        @tech = getTechLevel(@port, @size, @atmo, @hydro, @pop, @gov, @law)
        @bases = getBases(@port, @giant, @pop, sectorType)
        @trade = getTradeCodes(@size, @atmo, @hydro, @pop, @gov, @law, @tech)
        @primary = getPrimary(@pop, @atmo)
        @zone = getTravelZone(@pop, @atmo, @hydro, @gov, @law, @port, @tech)
    end
    
    def getGasGiants()
        giants = case @gen.rollTwoD()
        when 2..3 then 1
        when 4..5 then 2
        when 6..7 then 3
        when 8..10 then 4
        when 11..12 then 5
        else 0 end
        
        return giants
    end
    
    def getAsteroidBelts()
        belts = case @gen.rollTwoD()
        when 2..7 then 1
        when 8..11 then 2
        when 12 then 3
        else 0 end
        
        return belts
    end
    
    def getAtmosphere(size)
        atmo = @gen.minusSevenVal(size)

        if @gen.optionOpera() then
            if size < 5 then
                if size < 3 then
                    atmo = 0
                elsif size < 5 then
                    if atmo < 3 then
                        atmo = 0
                    elsif atmo < 6 then
                        atmo = 1
                    else
                        atmo = 10
                    end
                end
            end
        else
            if size < 2 then
                atmo = 0
            end
        end
        return atmo
    end
    
    # returns the temperature value based on the size and atmosphere
    def getTemperature(size, atmo)
        baseTemp = @gen.rollTwoD()
        drm = case atmo
            when 2..3 then -2
            when 4..5 then -1
            when 8..9 then 1
            when 10 then 2
            when 11..12 then 6
            when 13 then 2
            when 14 then -1
            when 15 then 2
            else 0
        end
        baseTemp += drm
        if baseTemp < 0 then baseTemp = 0 end
        if baseTemp > 15 then baseTemp = 15 end
        return baseTemp
    end
    
    # return the hydrographic percentage of a system
    def getHydrographics(size, atmo, temp)
        if size < 2 then
            return 0
        end
        
        baseHydro = @gen.minusSevenVal(size)
        drm = case atmo
            when 0..1 then
                if @gen.optionOpera() then
                    -6
                else
                    -4
                end
            when 2..3 then
                if @gen.optionOpera() then
                    -4
                else
                    0
                end
            when 10..11 then
                if @gen.optionOpera() then
                    -8 # is this correct? I would assume so
                else
                    -4
                end
            when 12 then -4
            else 0
        end
        
        if atmo != 13 then
            # intentionally additive
            if temp > 9 then
                drm -= 2
            end
            if temp > 11 then
                drm -= 4
            end
        end
        
        if @gen.optionOpera() then
            if size == 3 || size == 4 then
                if atmo == 10 then
                    drm -= -6
                end
            end
        end
        
        baseHydro += drm
        if baseHydro < 0 then baseHydro = 0 end
        if baseHydro > 10 then baseHydro = 10 end
        return baseHydro
    end
    
    def getPopulation(size, atmo, hydro, sectorType)
        if @gen.optionHard() || @gen.optionCustom() then
			pop = @gen.rollTwoD - 2
			if @gen.optionCustom() then
				if sectorType.eql? 'Hinterlands' then
					pop -= 1
				elsif sectorType.eql? 'Wilds' then
					pop -= 2
				end
			end

            if size < 2 || size > 9 then
                pop -=1
            end
            if atmo >= 2 && hydro == 0 then
                # desert worlds
                pop -= 1
            end
            if atmo >= 10 && hydro >= 1 then
                # strange fluid worlds
                pop -= 1
            end
            if atmo == 5 || atmo == 6 || atmo == 8 then
                pop += 1
            else
                pop -= 1
            end

            if pop < 0 then pop = 0 end
            return pop
        else
            return @gen.rollTwoD - 2
        end
    end

    def getGovernment(pop, sectorType)
		if @gen.optionCustom() then
            gov = 0
            # based on the sectorType, generate a good government
            if sectorType.eql? 'Wilds' then
                # in the wilds anything can happen, make a flat roll
				gov = @gen.roll(16) - 1
            end
            if sectorType.eql? 'Hinterlands' then
                # the hinterlands are not so wild, but still incredibly varied
				gov = case @gen.roll(8)
				when 1 then -1
				when 2 then 4
				when 3 then 5
				when 4 then 6
				when 5 then 7
				when 6 then 8
				when 7 then 9
				when 8 then -1
				else 0 end

				if gov <= 0 then
					gov = case @gen.roll(10)
					when 1  then 0
					when 2  then 1
					when 3  then 2
					when 4  then 3
					when 5  then 10
					when 6  then 11
					when 7  then 12
					when 8  then 13
					when 9  then 14
					when 10 then 15
					else 0 end
				end
            end
            if sectorType.eql? 'Fringe' then
                # fringe worlds can run the gamut but aren't too extreme
				if pop < 6 then
					gov = case @gen.rollTwoD()
					when 2  then -1
					when 3  then 2
					when 4  then 6
					when 5  then 5
					when 6  then 4
					when 7  then 9
					when 8  then 8
					when 9  then 5
					when 10 then 7
					when 11 then 10
					when 12 then -1
					else 0 end

					if gov <= 0 then
						gov = case @gen.roll(8)
						when 1 then 0
						when 2 then 1
						when 3 then 3
						when 4 then 11
						when 5 then 12
						when 6 then 13
						when 7 then 14
						when 8 then 15
						else 0 end
					end
				else
					gov = case @gen.rollTwoD()
					when 2  then 12
					when 3  then 10
					when 4  then 6
					when 5  then 5
					when 6  then 4
					when 7  then 7
					when 8  then 3
					when 9  then 8
					when 10 then 9
					when 11 then 1
					when 12 then 13
					else 0 end
				end
            end
            if sectorType.eql? 'Settled' then
                # settled worlds tend towards more stable forms
				if pop < 6 then
					gov = case @gen.rollTwoD()
					when 2  then 1
					when 3  then 7
					when 4  then 6
					when 5  then 5
					when 6  then 4
					when 7  then 9
					when 8  then 8
					when 9  then 10
					when 10 then 3
					when 11 then 2
					when 12 then -1
					else 0 end

					if gov <= 0 then
						gov = case @gen.roll(4)
						when 1 then 11
						when 2 then 12
						when 3 then 13
						else 0 end
					end
				else
					gov = case @gen.rollTwoD()
					when 2  then -1
					when 3  then 1
					when 4  then 6
					when 5  then 5
					when 6  then 8
					when 7  then 4
					when 8  then 5
					when 9  then 9
					when 10 then 10
					when 11 then 3
					when 12 then -1
					else 0 end

					if gov <= 0 then
						gov = case @gen.roll(4)
						when 1 then 11
						when 2 then 12
						when 3 then 13
						else 7 end
					end
				end
            end
            if sectorType.eql? 'Empire' then
                # empire worlds are stable
				if pop < 6 then
					gov = case @gen.rollTwoD()
					when 2  then 12
					when 3  then 3
					when 4  then 2
					when 5  then 5
					when 6  then 4
					when 7  then 8
					when 8  then 9
					when 9  then 6
					when 10 then 7
					when 11 then 1
					when 12 then 10
					else 0 end
				else
					gov = case @gen.rollTwoD()
					when 2  then 12
					when 3  then 3
					when 4  then 5
					when 5  then 8
					when 6  then 4
					when 7  then 8
					when 8  then 9
					when 9  then 6
					when 10 then 7
					when 11 then 5
					when 12 then 10
					else 0 end
				end
            end
            if sectorType.eql? 'Core' then
                # core worlds will tend towards higher but more stable government types.
				if pop < 5 then
					gov = case @gen.rollTwoD()
					when 2  then 1
					when 3  then 3
					when 4  then 4
					when 5  then 6
					when 6  then 5
					when 7  then 9
					when 8  then 8
					when 9  then 4
					when 10 then 12
					when 11 then 2
					when 12 then 2
					else 0 end
				else
					gov = case @gen.rollTwoD()
					when 2  then 3
					when 3  then 3
					when 4  then 6
					when 5  then 5
					when 6  then 8
					when 7  then 9
					when 8  then 8
					when 9  then 4
					when 10 then 9
					when 11 then 12
					when 12 then 12
					else 0 end
				end
            end
			return gov
		else
			return @gen.minusSevenVal(pop)
		end
	end
    
    def getLawLevel(pop, gov)
        if @gen.optionCustom() then
            law = case gov
            when 0 then -4 # No government structure means no law
            when 1 then 5 # Company/corporation
            when 2 then 4 # Participating democracy
            when 3 then 5 # Self-perpetuating oligarchy
            when 4 then 4 # Representative democracy
            when 5 then 5 # feudal technocracy
            when 6 then 5 # Captive government/colony
            when 7 then 3 # Balkanization
            when 8 then 4 # Civil service bureaucracy
            when 9 then 5 # Impersonal bureaucracy
            when 10 then 7 # Charismatic dictator
            when 11 then 10 # Non-charismatic dictator
            when 12 then 7 # Charismatic oligarchy
            when 13 then 8 # Religious dictatorship
            when 14 then 7 # Religious autocracy
            when 15 then 11 # Totalitarian oligarchy
            else 0 end

            # account for population size.
            if pop < 4 then
                law -= 1
            end
            if pop > 8 then
                law += 1
            end

            # add some variance to the final score
            law += @gen.roll(4) - @gen.roll(2)

            # respect the limits
            if law < 0 then law = 0 end
            if law > 15 then law = 15 end
            return law
        else
            return @gen.minusSevenVal(gov)
        end
    end
    
    def getStarport(pop, atmo, sectorType)
# Wilds, Hinterlands, Fringe, Settled, Empire, Core
        basePort = 0
        if @gen.optionHard() && !@gen.optionCustom() then
			if pop < 1 then return 'X' end
            basePort = @gen.minusSevenVal(pop)
        else
            basePort = @gen.rollTwoD()
        end
        if @gen.optionCustom() then
			if sectorType.eql? 'Wilds' then
				basePort -= 2
			end
			if sectorType.eql? 'Hinterlands' then
				basePort -= 2
			end
            if (atmo < 4 || atmo == 10 || atmo == 11 || atmo == 12 || atmo == 15) && basePort < 5 then
                basePort = 5
            end
			if sectorType.eql? 'Empire' then
				basePort += 1
			end
			if sectorType.eql? 'Core' then
				basePort += 2
			end
        end
		if basePort < 0 then basePort = 0 end
        port = case basePort
            when 0..2 then 'X'
            when 3..4 then 'E'
            when 5 then 'D'
            when 6..7 then 'C'
            when 8..9 then 'B'
            else 'A'
        end
        return port
    end
    
    # return the tech level of the system
    def getTechLevel(port, size, atmo, hydro, pop, gov, law)
        if pop < 1 then return 0 end
		
        baseTech = @gen.rollOneD()
        
        # port modifiers
        drm = case port
            when 'A' then 6
            when 'B' then 4
            when 'C' then 2
            when 'X' then -4
            else 0
        end
        
        # size modifiers, intentionally additive
        if size < 5 then
            drm += 1
        end
        if size < 2 then
            drm += 1
        end
        
        if @gen.optionCustom() then
            # Additonal atmospheric and hydrographic modifiers
            if atmo < 4 || atmo > 9 then
                drm += 1
            end
            if hydro == 0 || hydro == 9 then
                drm += 1
            end
            if hydro == 10 then
                drm += 2
            end
        end
        
        # population modifiers
        popMod = case pop
            when 1..5 then 1
            when 9 then 1
            when 10 then 2
            when 11 then 3
            when 12 then 4
            else 0
        end
        drm += popMod
        
        # government modifiers
        if @gen.optionCustom() then
			govMod = case gov
				when 0 then 1
				when 1..4 then 0
				when 5 then 1
				when 6 then 0
				when 7 then 2
				when 8..9 then 0
				when 10 then -1
				when 11 then -2
				when 12 then 0
				when 13..15 then -4
				else 0
			end
			drm += govMod
		else
			if gov == 0 || gov == 5 then
				drm += 1
			end
			if gov == 7 then
				drm += 2
			end
			if gov == 13 || gov == 14 then
				drm -= 2
			end
		end
		
		#law modifiers
        if @gen.optionCustom() then
			if law > 9 then drm -= 1 end
		end
        
        tech = baseTech + drm
        
        # now fix tech based on certain value expectations
        techMin = case atmo
            when 0..1 then 6
            when 2..3 then 5
            when 10 then 6
            when 11 then 8
            when 12 then 9
            when 13 then 5
            when 15 then 6
            else 0
        end
        if tech < techMin then tech = techMin end
        if tech > 15 then tech = 15 end # This can be removed via option, maybe
        return tech
    end
    
    # return any bases that might exist at this system
    def getBases(port, giant, pop, sectorType)
        bases = ''
		# apply a die modifier for population and sector type for certain bases
		# Wilds, Hinterlands, Fringe, Settled, Empire, Core
		# It should still be possible for a base to exist in 0 pop, just less likely
		ndrm = 0
		sdrm = 0
		rdrm = 0
		tdrm = 0
		idrm = 0
		pdrm = 0
		
		if pop < 1 then
			ndrm -= 3
			sdrm -= 1
			rdrm -= 1
			tdrm -= 6
			idrm -= 5
		end
		
		if sectorType.eql? 'Core' then
			ndrm += 2
			sdrm -= 2
			rdrm += 1
			tdrm -= 1
			idrm -= 4
			pdrm -= 2
		end
		if sectorType.eql? 'Empire' then
			ndrm += 1
			sdrm -= 1
			tdrm += 1
			idrm -= 4
			pdrm -= 1
		end
		if sectorType.eql? 'Settled' then
			rdrm += 1
			tdrm += 1
		end
		if sectorType.eql? 'Fringe' then
			ndrm -= 4
			sdrm += 3
			idrm += 1
			pdrm += 1
		end
		if sectorType.eql? 'Hinterlands' then
			ndrm -= 6
			sdrm += 1
			rdrm -= 1
			tdrm -= 2
			pdrm += 1
		end
		if sectorType.eql? 'Wilds' then
			ndrm -= 6
			rdrm -= 2
			tdrm -= 4
			idrm -= 2
			pdrm += 2
		end
		
		
        if port.eql? 'A' then
            if @gen.rollTwoD + ndrm >= 8 then
                bases.concat('N') # Naval base
            end
            if @gen.rollTwoD + sdrm >= 10 then
                bases.concat('S') # Scout base
            end
            if @gen.rollTwoD + rdrm >= 8 then
                bases.concat('R') # Research base
            end
            if @gen.rollTwoD + tdrm >= 4 then
                bases.concat('T') # Traveller's Aid Society present
            end
            if @gen.rollTwoD + idrm >= 6 then
                bases.concat('I') # Imperial Consulate
            end
        end
        if port.eql? 'B' then
            if @gen.rollTwoD + ndrm >= 8 then
                bases.concat('N') # Naval base
            end
            if @gen.rollTwoD + sdrm >= 8 then
                bases.concat('S') # Scout base
            end
            if @gen.rollTwoD + rdrm >= 10 then
                bases.concat('R') # Research base
            end
            if @gen.rollTwoD + tdrm >= 6 then
                bases.concat('T') # Traveller's Aid Society present
            end
            if @gen.rollTwoD + idrm >= 8 then
                bases.concat('I') # Imperial Consulate
            end
        end
        if port.eql? 'C' then
            if @gen.rollTwoD + sdrm >= 8 then
                bases.concat('S') # Scout base
            end
            if @gen.rollTwoD + rdrm >= 10 then
                bases.concat('R') # Research base
            end
            if @gen.rollTwoD + tdrm >= 10 then
                bases.concat('T') # Traveller's Aid Society present
            end
            if @gen.rollTwoD + idrm >= 10 then
                bases.concat('I') # Imperial Consulate
            end
        end
        if port.eql? 'D' then
            if @gen.rollTwoD + sdrm >= 7 then
                bases.concat('S') # Scout base
            end
        end
        if !(bases.include?('N') || bases.include?('S') || bases.include?('I')) then
            if !(port == 'A' || port == 'B') then
                if port == 'X' then
                    if @gen.rollTwoD + pdrm >= 10 then
                        bases.concat('P') # Pirate base
                    end
                else
                    if @gen.rollTwoD + pdrm >= 12 then
                        bases.concat('P') # Pirate base
                    end
                end
            end
        end
        bases.concat('        ')
        return bases[0..7]
    end
    
    # return any trade codes that define this system 
    def getTradeCodes(size, atmo, hydro, pop, gov, law, tech)
        trade = ''
        
        if (atmo >= 4 && atmo <= 9) && (hydro >= 4 && hydro <= 8) && (pop >= 5 && pop <= 7) then
            trade.concat('Ag ')
        end
        if size == 0 && atmo == 0 && hydro == 0 then
            trade.concat('As ')
        end
        if pop == 0 && gov == 0 && law == 0 then
            trade.concat('Ba ')
        end
        if atmo >= 2 && hydro == 0 then
            trade.concat('De ')
        end
        if atmo >= 10 && hydro >= 1 then
            trade.concat('Fl ')
        end
        if size >= 5 && (atmo >= 4 && atmo <= 9) && (hydro >= 4 && hydro <= 8) then
            trade.concat('Ga ')
        end
        if pop >= 9 then
            trade.concat('Hi ')
        end
        if tech >= 12 then
            trade.concat('Ht ')
        end
        if atmo < 2 && hydro >= 1 then
            trade.concat('IC ')
        end
        if (atmo <= 2 || atmo == 4 || atmo == 7 || atmo == 9) && pop >= 9 then
            trade.concat('In ')
        end
        if pop >= 1 && pop <= 3 then
            trade.concat('Lo ')
        end
        if tech <= 5 then
            trade.concat('Lt ')
        end
        if atmo <= 3 && hydro <= 3 && pop >= 6 then
            trade.concat('Na ')
        end
        if pop >= 4 && pop <= 6 then
            trade.concat('NI ')
        end
        if (atmo >= 2 && atmo <= 5) && hydro <= 3 then
            trade.concat('Po ')
        end
        if (atmo == 6 || atmo == 8) && (pop >= 6 && pop <= 8) then
            trade.concat('Ri ')
        end
        if atmo == 0 then
            trade.concat('Va ')
        end
        if hydro == 10 then
            trade.concat('Wa ')
        end
        return trade
    end

    def getPrimary(pop, atmo)
        if @gen.rollTwoD() < 9 then
            # single star
            return getStar(pop, atmo)
        else
            # binary system
            return getStar(pop, atmo).concat('/').concat(getStar(pop, atmo, false))
        end
    end
    
    def getStar(pop, atmo, primary = true)
        drm = 0
        if pop >= 8 || (atmo >= 4 && atmo <= 9) then
            drm += 4
        end
        if primary then
            type = case @gen.rollTwoD() + drm
                when 2 then 'A'
                when 3..7 then 'M'
                when 8 then 'K'
                when 9 then 'G'
                else 'F'
            end
        else
            type = case @gen.rollTwoD() + drm
                when 2 then 'A'
                when 3..4 then 'F'
                when 5..6 then 'G'
                when 7..8 then 'K'
                else 'M'
            end
        end
        size = case @gen.rollTwoD() + drm
            when 2 then 'II'
            when 3 then 'III'
            when 4 then 'IV'
            when 5..10 then 'V'
            when 11 then 'VI'
            else 'D'
        end
        return type.concat(@gen.rollDTen().to_s).concat(size)
    end
    
    def getTravelZone(pop, atmo, hydro, gov, law, port, tech)
        zone = 0
        if pop < 1 then # never know what's there when people aren't
            zone += 1
        end
        if pop > 1 && tech < 1 then # developing or savage world
            zone += 2
        end
        if atmo >= 10 && hydro >= 1 then # strange fluid worlds
            zone += 1
        end
        if gov == 0 || gov == 7 || gov > 12 then # opressive or inherently unstable governments
            zone += 1
        end
        if law > 9 then # oppressive regime
            zone += 1
        end
        if law > 11 then # very opressive regime
            zone += 1
        end
        if port == 'X' then # use caution without an established port
            zone += 1
        end
        
        if zone > 2 then
            if pop < 1 then
                return 'A'
            else
                return 'R'
            end
        end
        if zone > 1 then
            return 'A'
        end
        return '-'
    end
    
    def UWP()
        truncName = @name.concat('                              ')[0..29] # thirty characters should be plenty?
        truncPrime = @primary.concat('          ')[0..10]
        
        return @hex + ' ' + truncName + ' ' + @port + @size.to_s(16).upcase + @atmo.to_s(16).upcase +
            @hydro.to_s(16).upcase + @pop.to_s(16).upcase + @gov.to_s(16).upcase + @law.to_s(16).upcase +
            "-" + @tech.to_s(16).upcase + '  ' + @zone + @temp.to_s(16).upcase + @giants.to_s + @belts.to_s + '  ' + truncPrime +
            '  ' + @bases + '  ' + @trade
    end
    
    def print()
        puts UWP()
    end
	
	@temp
end

if __FILE__ == $0
#    doLegend = false
# Base, Opera, Hard, Custom
# Wilds, Hinterlands, Fringe, Settled, Empire, Core
    @sysgen = SystemBuilder.new("Base", "Settled")
#    @sysgen = SystemBuilder.new("Custom")
    @sysgen.doSector(0)
    
#    if doLegend then
#        puts
#        puts '#################### Legend'
#        puts '0303 Braeeshan                      B2009DF-9  A641  K7V          NST       Hi In Na Va'
#        puts '|    |                              ||||||| |  ||||  |            |         |'
#        puts '|    |                              ||||||| |  ||||  |            |         +- Trade Codes'
#        puts '|    |                              ||||||| |  ||||  |            +----------- Bases'         
#        puts '|    |                              ||||||| |  ||||  +------------------------ Star details'            
#        puts '|    |                              ||||||| |  |||+--------------------------- Asteroid Belts'  
#        puts '|    |                              ||||||| |  ||+---------------------------- Gas Giants'
#        puts '|    |                              ||||||| |  |+----------------------------- Mainworld Temperature'
#        puts '|    |                              ||||||| |  +------------------------------ Travel Code'
#        puts '|    |                              ||||||| +--------------------------------- Tech Level'
#        puts '|    |                              ||||||+----------------------------------- Law Level'
#        puts '|    |                              |||||+------------------------------------ Government Type'
#        puts '|    |                              ||||+------------------------------------- Population'
#        puts '|    |                              |||+-------------------------------------- Hydrographics'
#        puts '|    |                              ||+--------------------------------------- Atmosphere'
#        puts '|    |                              |+---------------------------------------- Size'
#        puts '|    |                              +----------------------------------------- Starport'
#        puts '|    +------------------------------------------------------------------------ Name'
#        puts '+----------------------------------------------------------------------------- Hex'
#    end
end
