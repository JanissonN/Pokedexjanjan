var status = (Math.floor(Math.random() * 1000 + 1))

var list = document.querySelector('.Pokemon');

var pokemons = [
    {
        name: "Squirtle",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/2/2f/SquirtleSprite.gif",
        
        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Wartortle",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/1/1b/WartortleSprite.gif",
        
        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Blastoise",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/3/31/BlastoiseSprite.gif",
        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },{
        name: "Bulbasaur",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/pt/9/98/BulbasaurSprite.gif",
        
        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Ivysaur",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/pt/3/36/IvysaurSprite.gif",
        
        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Venusaur",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/pt/c/c4/VenusaurSprite.gif",
        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Charmander",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/pt/6/6c/CharmanderSprite.gif",
        
        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Charmeleon",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/pt/1/12/CharmeleonSprite.gif",
        
        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Charizard",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/pt/7/72/CharizardSprite.gif",
        
        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Caterpie",
        descricao:`ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/5/5d/CaterpieSprite.gif",
        
        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "",
    },
    {
        name: "Metapod",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/6/66/MetapodSprite.gif",
        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "",
    },
    {
        name: "Butterfree",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/commons/3/3b/ButterfreeSprite.gif",
        
        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Weedle",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/5/50/WeedleSprite.gif",
        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },{
        name: "Kakuna",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/8/80/KakunaSprite.gif",
        
        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Beedrill",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/3/32/BeedrillSprite.gif",
        
        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Pidgey",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/9/93/PidgeySprite.gif",
       
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Pidgeotto",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/a/a5/PidgeottoSprite.gif",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Pidgeot",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/6/65/PidgeotSprite.gif",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },{
        name: "Pikachu",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/4/4b/PikachuSprite.gif",
        
        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Raichu",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/6/63/RaichuSprite.gif",
        
        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Rattata",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/d/d8/RattataSprite.gif",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Raticate",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/d/dc/RaticateSprite.gif",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Spearow",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/2/26/SpearowSprite.gif",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },{
        name: "Fearow",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/2/2a/FearowSprite.gif",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Ekans",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/9/94/EkansSprite.gif",
        
        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Arbok",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/7/73/ArbokSprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Sandshrew",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/8/86/SandshrewSprite.gif",
        
        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "",
    },
    {
        name: "Sandslash",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/2/29/SandslashSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "",
    },{
        name: "NidoranF",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/4/48/Nidoran%E2%99%80Sprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Nidorina",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/7/73/NidorinaSprite.gif",
        
        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Nidoqueen",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/8/8e/NidoqueenSprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
    },
    {
        name: "NidoranM",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/pt/2/29/Nidoran%E2%99%82Sprite.gif",
        
        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Nidorino",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/pt/4/40/NidorinoSprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },{
        name: "Nidoking",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/pt/9/94/NidokingSprite.gif",
        
        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
    },
    {
        name: "Cleffa",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/c/c1/CleffaSprite.gif",
        
        type1: "https://images.uncyc.org/pt/thumb/3/31/FairyIC.png/40px-FairyIC.png",
        type2: "",
    },
    {
        name: "Clefairy",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/2/26/ClefairySprite.gif",

        type1: "https://images.uncyc.org/pt/thumb/3/31/FairyIC.png/40px-FairyIC.png",
        type2: "",
    },
    {
        name: "Clefable",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/a/a3/ClefableSprite.gif",

        type1: "https://images.uncyc.org/pt/thumb/3/31/FairyIC.png/40px-FairyIC.png",
        type2: "",
    },
    {
        name: "Vulpix",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/5/5f/VulpixSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Ninetales",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/d/d7/NinetalesSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Jigglypuff",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/8/81/Jigglypuffgif.png",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/thumb/3/31/FairyIC.png/40px-FairyIC.png",
    },
    {
        name: "Wigglytuff",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/9/93/Wigglytufgif.png",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/thumb/3/31/FairyIC.png/40px-FairyIC.png",
    },
    {
        name: "Zubat",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/f/f9/Zubatgif.png",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Golbat",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/d/d0/Golbatgif.png",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Oddish",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/1/14/OddishSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Gloom",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/b/b5/GloomSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Vileplume",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/commons/6/66/VileplumeSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Paras",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/b/b3/ParasSprite.gif",

        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
    },
    {
        name: "Parasect",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/commons/7/7d/ParasectSprite.gif",

        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
    },
    {
        name: "Venonat",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/8/8b/VenonatSprite.gif",

        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Venomoth",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/e/e3/VenomothSprite.gif",

        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Diglett",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/6/61/Diglettsprite.gif",

        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "",
    },
    {
        name: "Dugtrio",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/9/96/Dugtriosprite.gif",

        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "",
    },
    {
        name: "Meowth",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/pt/5/52/MeowthSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Persian",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/pt/5/56/PersianSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Psyduck",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/pt/1/12/Psyduck90.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Golduck",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/2/26/Golduck90.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Mankey",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/d/d5/MankeySprite.gif",

        type1: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
        type2: "",
    },
    {
        name: "Primeape",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/2/25/PrimeapeSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
        type2: "",
    },
    {
        name: "Growlithe",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/pt/7/7e/GrowlitheSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Arcanine",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/pt/5/5c/ArcanineSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Poliwag",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/6/65/PoliwagSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Poliwhirl",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/1/10/PoliwhirlSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Poliwrath",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/f/f7/PoliwrathSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
    },
    {
        name: "Abra",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/4/4f/AbraSprite.gif",

        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    },
    {
        name: "Kadabra",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/0/02/KadabraSprite.gif",

        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    },
    {
        name: "Alakazam",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/5/5a/AlakazamSprite.gif",

        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    },
    {
        name: "Machop",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/7/7f/MachopSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
        type2: "",
    },
    {
        name: "Machoke",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/6/6d/MachokeSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
        type2: "",
    },
    {
        name: "Machamp",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/commons/9/91/MachampSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
        type2: "",
    },
    {
        name: "Bellsprout",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/2/2d/BellsproutSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "",
    },
    {
        name: "Weepinbell",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/b/b1/WeepinbellSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "",
    },
    {
        name: "Victreebel",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/9/9c/VictreebelSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "",
    },
    {
        name: "Tentacool",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/8/8f/TentacoolSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Tentacruel",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/7/74/TentacruelSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Geodude",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/pt/7/75/GeodudeSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
    },
    {
        name: "Graveler",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/pt/2/24/GravelerSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
    },
    {
        name: "Golem",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/pt/8/8b/GolemSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
    },
    {
        name: "Ponyta",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/pt/b/b4/PonytaSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Rapidash",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/pt/a/a4/RapidashSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Slowpoke",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/0/04/SlowpokeSprite.gif",

        type1: "",
        type2: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
    },
    {
        name: "Slowbro",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/9/90/SlowbroSprite.gif",

        type1: "",
        type2: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
    },
    {
        name: "Magnemite",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/2/23/MagnemiteSprite.gif",

        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Magneton",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/e/e9/MagnetonSprite.gif",

        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Farfetch'd",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/6/6f/FarfetchdSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Doduo",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/d/d2/DoduoSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Dodrio",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/5/57/DodrioSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Seel",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/commons/3/31/SeelSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Dewgong",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/commons/c/c6/DewgongSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "https://images.uncyc.org/pt/7/70/IceIC.gif",
    },
    {
        name: "Grimer",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/c/c4/GrimerSprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Muk",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/4/41/MukSprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Shellder",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/6/6b/ShellderSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Cloyster",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/9/99/CloysterSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "https://images.uncyc.org/pt/7/70/IceIC.gif",
    },
    {
        name: "Gastly",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/3/36/GastlySprite.gif",

        type1: "",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Haunter",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/6/6b/HaunterSprite.gif",

        type1: "",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Gengar",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/0/08/GengarSPrite.gif",

        type1: "",
        type2: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
    },
    {
        name: "Onix",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/pt/6/60/OnixSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
    },
    {
        name: "Drowzee",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/2/2b/DrowzeeSprite.gif",

        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    },
    {
        name: "Hypno",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/3/31/HypnoSprite.gif",

        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    },
    {
        name: "Krabby",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/commons/6/62/KrabbySprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Kingler",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/commons/7/7d/KinglerSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Voltorb",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/pt/d/d2/VoltorbSprite.gif",

        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Electrode",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/pt/f/fa/ElectrodeSprite.gif",

        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Exeggcute",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/5/5f/ExeggcuteSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
    },
    {
        name: "Exeggutor",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/0/00/ExeggutorSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
    },
    {
        name: "Cubone",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "ttps://media.tenor.com/bHDp1A1imDAAAAAj/pokemon-day.gif",

        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "",
    },
    {
        name: "Marowak",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/pt/thumb/e/ea/AlolanMarowakSprite.gif/65px-AlolanMarowakSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "",
    },
    {
        name: "Hitmonlee",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/commons/6/6a/Hitmonleegif.png",

        type1: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
        type2: "",
    },
    {
        name: "Hitmonchan",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://media.tenor.com/nyDc6bHhIrYAAAAj/hitmonchan.gif",

        type1: "https://images.uncyc.org/pt/8/8e/FightingIC.gif",
        type2: "",
    },
    {
        name: "Lickitung",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://media.tenor.com/ugILIpMF91AAAAAj/lickitung.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Koffing",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/6/68/KoffingSprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Weezing",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/7/77/WeezingSprite.gif",

        type1: "https://images.uncyc.org/pt/7/71/PoisonIC.gif",
        type2: "",
    },
    {
        name: "Rhyhorn",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/pt/a/a9/RhyhornSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "https://images.uncyc.org/pt/1/15/RockIC.gif",
    },
    {
        name: "Rhydon",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/pt/f/f9/RhydonSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d9/GroundIC.gif",
        type2: "https://images.uncyc.org/pt/1/15/RockIC.gif",
    },
    {
        name: "Chansey",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/pt/c/c0/ChanseySprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Tangela",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/3/35/TangelaSprite.gif",

        type1: "https://images.uncyc.org/pt/8/8a/GrassIC.gif",
        type2: "",
    },
    {
        name: "Kangaskhan",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/commons/7/7a/KangaskhanSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Horsea",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/2/22/HorseaSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Seadra",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/9/9c/SeadraSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Goldeen",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/f/f5/GoldeenSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Seaking",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/9/92/SeakingSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Staryu",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/commons/d/d0/StaryuSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Starmie",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/0/0d/StarmieSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
    },
    {
        name: "Mr. Mime",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/e/e3/Mr.mimegif.png",

        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    },
    {
        name: "Scyther",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "verde",
        img: "https://images.uncyc.org/pt/b/b3/ScytherSprite.gif",

        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Jynx",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/7/71/JynxSprite.gif",

        type1: "https://images.uncyc.org/pt/7/70/IceIC.gif",
        type2: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
    },
    {
        name: "Electabuzz",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/pt/0/02/Electabuzzgif.png",

        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Magmar",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/pt/a/a1/Magmargif.png",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Pinsir",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/commons/5/55/PinsirSprite.gif",

        type1: "https://images.uncyc.org/pt/2/2a/BugIC.gif",
        type2: "",
    },
    {
        name: "Tauros",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/e/e8/TaurosSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Magikarp",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "laranja",
        img: "https://images.uncyc.org/pt/9/92/MagikarpSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Gyarados",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/f/ff/GyaradosSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Lapras",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/0/0d/LaprasSprite.gif",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "https://images.uncyc.org/pt/7/70/IceIC.gif",
    },
    {
        name: "Ditto",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/commons/6/69/DittoSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Eevee",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/pt/f/f6/EeveeSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Jolteon",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/pt/b/bc/Joltsprite.png",
        
        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "",
    },
    {
        name: "Vaporeon",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/a/ab/Vaporesprite.png",

        type1: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
        type2: "",
    },
    {
        name: "Flareon",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "vermelho",
        img: "https://images.uncyc.org/pt/5/5b/Flaresprite.png",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "",
    },
    {
        name: "Porygon",
        descricao: `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/pt/a/a7/PorygonSprite.gif",
        
        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Omanyte",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/6/65/OmanyteSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
    },
    {
        name: "Omastar",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "amarelo",
        img: "https://images.uncyc.org/commons/2/2e/OmastarSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
    },
    {
        name: "Kabuto",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/commons/d/da/KabutoSprite.gif",
        
        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
    },
    {
        name: "Kabutops",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/commons/d/da/KabutopsSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/c/cc/WaterIC.gif",
    },
    {
        name: "Aerodactyl",
        descricao: `ATK = ${status} DEF = ${status}` ,
        color: "preto",
        img: "https://images.uncyc.org/commons/4/4c/AerodactylSprite.gif",

        type1: "https://images.uncyc.org/pt/1/15/RockIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Snorlax",
        descricao: `ATK = ${status} DEF = ${status}` ,
        color: "azul",
        img: "https://images.uncyc.org/pt/7/77/SnorlaxSprite.gif",

        type1: "https://images.uncyc.org/pt/e/e4/NormalIC.gif",
        type2: "",
    },
    {
        name: "Articuno",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "azul",
        img: "https://images.uncyc.org/pt/7/74/ArticunoSprite.gif",
        
        type1: "https://images.uncyc.org/pt/7/70/IceIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Zapdos",
        descricao: `ATK = ${status} DEF = ${status}` ,
        color: "amarelo",
        img: "https://images.uncyc.org/pt/0/09/ZapdosSprite.gif",

        type1: "https://images.uncyc.org/pt/f/f7/ElectricIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Moltres",
        descricao: `ATK = ${status} DEF = ${status}` ,
        color: "laranja",
        img: "https://images.uncyc.org/pt/b/b7/MoltresSprite.gif",

        type1: "https://images.uncyc.org/pt/d/d0/FireIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Dratini",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/pt/6/66/DratiniSprite.gif",

        type1: "https://images.uncyc.org/pt/5/57/DragonIC.gif",
        type2: "",
    },
    {
        name: "Dragonair",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/pt/7/73/DragonairSprite.gif",
        
        type1: "https://images.uncyc.org/pt/5/57/DragonIC.gif",
        type2: "",
    },
    {
        name: "Dragonite",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "preto",
        img: "https://images.uncyc.org/pt/5/5f/DragoniteSprite.gif",

        type1: "https://images.uncyc.org/pt/5/57/DragonIC.gif",
        type2: "https://images.uncyc.org/pt/7/73/FlyingIC.gif",
    },
    {
        name: "Mewtwo",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "roxo",
        img: "https://images.uncyc.org/pt/e/e5/Mewtwos.gif",

        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    },
    {
        name: "Mew",
        descricao:  `ATK = ${status} DEF = ${status}`,
        color: "rosa",
        img: "https://images.uncyc.org/commons/9/92/MewSprite.gif",
        
        type1: "https://images.uncyc.org/pt/2/23/PsychicIC.gif",
        type2: "",
    }
];

pokemons.forEach((item) => {
    var types;

    if(item.type1 != "") {
        types = `<img src="${item.type1}" alt="">`;
    }

    if(item.type2 != "") {
        types += `<img src="${item.type2}" alt="">`;
    }

    list.innerHTML += `
    <li class="${item.color}">
        <div class="info">
            <div>
                <div>
                    ${types}
                </div>
                <p>${item.name}</p>
            </div>

            <p class="descricao">${item.descricao}</p>
        </div>

        <img src="${item.img}" alt="${item.name}">
    </li>
    `;
});