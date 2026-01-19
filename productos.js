const listaProductos = [
    // ========== PRODUCTOS WAKA ACTIVOS (PRIMEROS) ==========
    { id: 1, categoria: 'vapes', activo: true, orden: 1, agotado: false, nombre: "Waka DM 15K",  modelo: "15000 Puffs", precio: 160, img: "img/waka_15k.webp",   sabores: [
        { nombre: "Fresh Mint", disponible: true },
        { nombre: "Peach Blue Raspberry", disponible: true },
        { nombre: "Cherry Berry", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Peach Mango Water", disponible: true },
        { nombre: "Kiwi Dragon Berry", disponible: true },
        { nombre: "Strawberry Burst", disponible: true },
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Green Grape Ice", disponible: true },
        { nombre: "Strawberry Grape", disponible: true },
        { nombre: "Strawberry Banana", disponible: true },
        { nombre: "Watermelon Kiwi", disponible: true },
        { nombre: "Mojito Mint", disponible: true }
    ] },
    { id: 2, categoria: 'vapes', activo: true, orden: 2, agotado: false, nombre: "Waka Go 10K",  modelo: "10000 Puffs", precio: 135, img: "img/waka_slim_12k.webp",   sabores: [
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Blackberry", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Cherry Watermelon", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Strawberry Coco", disponible: true },
        { nombre: "Blueberry Mint", disponible: true },
        { nombre: "Lychee Burst", disponible: true },
        { nombre: "Fresh Mint", disponible: true },
        { nombre: "Mr Peach", disponible: true },
        { nombre: "Peach Blue Raspberry", disponible: true },
        { nombre: "Mango Lychee", disponible: true },
        { nombre: "Double Mint", disponible: true },
        { nombre: "Grape Mint", disponible: true },
        { nombre: "Piña Colada", disponible: true }
    ] },
    { id: 3, categoria: 'vapes', activo: true, orden: 3, agotado: false, nombre: "Waka Titan 30K",  modelo: "30000 Puffs", precio: 200, img: "img/waka_titan_30k.webp",   sabores: [
        { nombre: "Fresh Mint", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Peach Blue Raspberry Ice", disponible: true },
        { nombre: "Sour Blueberry Raspberry Ice", disponible: true },
        { nombre: "Strawberry Kiwi Ice", disponible: true },
        { nombre: "Strawberry Mango Ice", disponible: true },
        { nombre: "Juicy Grape Ice", disponible: true },
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Cherry Soda Ice", disponible: true },
        { nombre: "Banana Berry Ice", disponible: true },
        { nombre: "Guava Raspberry Ice", disponible: true }
    ] },
    { id: 4, categoria: 'vapes', activo: true, orden: 4, agotado: true, nombre: "Waka Blade 33K",  modelo: "33000 Puffs", precio: 210, img: "img/waka_blade_33k.webp", sabores: [
        { nombre: "Blue Razz Ice", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Strawberry Banana", disponible: true },
        { nombre: "Grape Ice", disponible: true },
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Peach Mango", disponible: true },
        { nombre: "Rainbow Candy", disponible: true }
    ] },
    { id: 5, categoria: 'vapes', activo: true, orden: 5, agotado: false, nombre: "Waka Burst 36K",  modelo: "36000 Puffs", precio: 220, img: "img/waka_burst_36k.webp",   sabores: [
        { nombre: "Blue Razz Ice", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Strawberry Banana", disponible: true },
        { nombre: "Miami Mint", disponible: true },
        { nombre: "Blueberry Watermelon", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Cherry Bomb", disponible: true },
        { nombre: "Peach Mango Watermelon", disponible: true },
        { nombre: "Pink Lemonade", disponible: true },
        { nombre: "Grape Ice", disponible: true },
        { nombre: "Forest Berries", disponible: true },
        { nombre: "Tulum Mint", disponible: true },
        { nombre: "Strawberry Refresher", disponible: true },
        { nombre: "Mr. Blue", disponible: true },
        { nombre: "Blueberry Splash", disponible: true },
        { nombre: "Mexico Mango", disponible: true },
        { nombre: "Danonino Creamy", disponible: true }
    ] },
    // ========== OTROS PRODUCTOS ACTIVOS CON DATOS COMPLETOS ==========
    { id: 6, categoria: 'vapes', activo: true, orden: 6, agotado: false, nombre: "Caliburn IronFist 18K", modelo: "18000 Puffs", precio: 30, img: "img/calibur_18k.webp", sabores: [
        { nombre: "Grape Ice", disponible: true },
        { nombre: "Miami Mint", disponible: true },
        { nombre: "Double Apple", disponible: true },
        { nombre: "Dragon Fruit Berry", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Mango Honeydew", disponible: true },
        { nombre: "White Gummy", disponible: true },
        { nombre: "Blue Razz", disponible: true },
        { nombre: "Peach Watermelon", disponible: true },
        { nombre: "Mixed Berries", disponible: true },
        { nombre: "Crazy Berry", disponible: true }
    ] },
    { id: 7, categoria: 'vapes', activo: true, orden: 7, agotado: false, nombre: "EB Design TE6000",   modelo: "6000 Puffs", precio: 14, img: "img/ebdesing_te_6k.webp",   sabores: [
        { nombre: "Ice Mint", disponible: true },
        { nombre: "Juicy Peach", disponible: true },
        { nombre: "Key West", disponible: true },
        { nombre: "Lemon Drop", disponible: true },
        { nombre: "Strawberry Ice", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Apple Peach", disponible: true },
        { nombre: "Autum", disponible: true },
        { nombre: "Blue Razz Ice", disponible: true },
        { nombre: "Clear", disponible: true },
        { nombre: "Hawaii Punch", disponible: true }
    ] },
    { id: 8, categoria: 'vapes', activo: true, orden: 8, agotado: false, nombre: "Elux Cyberover",     modelo: "18000 Puffs", precio: 65, img: "img/elux_18k.webp",       sabores: [
        { nombre: "Confusion", disponible: true }
    ] },
    { id: 9, categoria: 'vapes', activo: true, orden: 9, agotado: false, nombre: "Fire Rose 25K",      modelo: "25000 Puffs", precio: 45, img: "img/fire_rose_25k.webp",   sabores: [
        { nombre: "Sour Apple", disponible: true },
        { nombre: "Sour Rainbow Candy", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Watermelon Peach", disponible: true },
        { nombre: "Dragon Stranana", disponible: true },
        { nombre: "Red Bom", disponible: true }
    ] },
    { id: 10, categoria: 'vapes', activo: true, orden: 10, agotado: false, nombre: "Flamingo 30K",       modelo: "30000 Puffs", precio: 70, img: "img/flamingo_30k.webp",   sabores: [
        { nombre: "Banana Coconut", disponible: true },
        { nombre: "Blue Raspberry Magic Cotton", disponible: true }
    ] },
    { id: 11, categoria: 'vapes', activo: true, orden: 11, agotado: false, nombre: "Frozeen 7K",         modelo: "7000 Puffs", precio: 20, img: "img/frozeen_7k.webp",    sabores: [
        { nombre: "Lush Ice", disponible: true },
        { nombre: "Red Apple", disponible: true },
        { nombre: "Strawberry Banana", disponible: true },
        { nombre: "Rainbow Candy", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Strawberry Watermelon", disponible: true },
        { nombre: "Watermelon Bubblegum", disponible: true },
        { nombre: "Sour Apple", disponible: true },
        { nombre: "Clear", disponible: true }
    ] },
    { id: 12, categoria: 'vapes', activo: true, orden: 12, agotado: false, nombre: "Halo SYNIX 30K",     modelo: "30000 Puffs", precio: 105, img: "img/halor_30k.webp",       sabores: [
        { nombre: "Strawberry Watermelon", disponible: true },
        { nombre: "Tropical Mango", disponible: true },
        { nombre: "Raspberry Ice", disponible: true },
        { nombre: "Hawaii Dream", disponible: true },
        { nombre: "Blue Razz Ice", disponible: true },
        { nombre: "Banana Ice", disponible: true },
        { nombre: "Pineapple Coconut", disponible: true },
        { nombre: "Strawberry Donut", disponible: true },
        { nombre: "Cherry Peach", disponible: true },
        { nombre: "Cool Mint", disponible: true }
    ] },
    { id: 13, categoria: 'vapes', activo: true, orden: 13, agotado: false, nombre: "Fuman Spirit 8K",    modelo: "8000 Puffs", precio: 25, img: "img/fuman_spirit_8k.webp", sabores: [
        { nombre: "Wild Berries", disponible: true },
        { nombre: "Sweet Watermelon", disponible: true },
        { nombre: "Strawberry Mango Lime", disponible: true },
        { nombre: "Lemon Lime", disponible: true },
        { nombre: "Fresh Mint", disponible: true },
        { nombre: "Fruit Lollipops", disponible: true },
        { nombre: "Forest Strawberry", disponible: true },
        { nombre: "Cherry Lime", disponible: true },
        { nombre: "Blueberry Raspberry", disponible: true }
    ] },
    { id: 14, categoria: 'vapes', activo: true, orden: 14, agotado: false, nombre: "Hand Shake 15K",     modelo: "15000 Puffs", precio: 55, img: "img/hand_shake_15k.webp", sabores: [
        { nombre: "Blue Razz", disponible: true },
        { nombre: "Miami Mint", disponible: true },
        { nombre: "Apple Gummies", disponible: true },
        { nombre: "Juicy Peach", disponible: true },
        { nombre: "Dragon Stranana", disponible: true },
        { nombre: "Cherry Strazz", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Sour Lush Gummy", disponible: true }
    ] },
    { id: 15, categoria: 'vapes', activo: true, orden: 15, agotado: false, nombre: "iPlay Box Pro",      modelo: "15000 Puffs", precio: 165, img: "img/iplay_boxpro_15k.webp",      sabores: [
        { nombre: "Cherry Cranberry", disponible: true },
        { nombre: "Coco Strawberry", disponible: true },
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Grape Strawberry", disponible: true },
        { nombre: "Kiwi Strawberry", disponible: true },
        { nombre: "Mamba", disponible: true },
        { nombre: "Pink Lemonade", disponible: true },
        { nombre: "Strawberry Watermelon", disponible: true },
        { nombre: "Tulum Mint", disponible: true }
    ] },
    { id: 16, categoria: 'vapes', activo: true, orden: 16, agotado: false, nombre: "Pillow Talk",       modelo: "8500 Puffs", precio: 38, img: "img/pillow_talk_8.5k.webp", sabores: [
        { nombre: "Tango Mango", disponible: true },
        { nombre: "Toffee Nut", disponible: true },
        { nombre: "Peach Mango Pineapple", disponible: true },
        { nombre: "Sweet Mint", disponible: true },
        { nombre: "Strawnana", disponible: true },
        { nombre: "Pink Whip Cream", disponible: true }
    ] },
    { id: 17, categoria: 'vapes', activo: true, orden: 17, agotado: false, nombre: "Ronaldinho 15K",     modelo: "15000 Puffs", precio: 35, img: "img/ronaldinho10_15k.webp", sabores: [
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Grape Ice", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true }
    ] },
    { id: 18, categoria: 'vapes', activo: true, orden: 18, agotado: false, nombre: "Solaris 25K",       modelo: "25000 Puffs", precio: 75, img: "img/solaris_25k.webp",    sabores: [
        { nombre: "Blue Razz Ice", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Rainbow Candy", disponible: true },
        { nombre: "Blackcurrant Menthol", disponible: true },
        { nombre: "Sour Apple Ice", disponible: true },
        { nombre: "Triple Mango", disponible: true },
        { nombre: "Strawberry Pineapple Coconut", disponible: true },
        { nombre: "Lemon Lime", disponible: true },
        { nombre: "Tropical Ice", disponible: true },
        { nombre: "Pink Burst", disponible: true },
        { nombre: "Peach Ice", disponible: true },
        { nombre: "Strawberry Mint", disponible: true },
        { nombre: "Menthol", disponible: true },
        { nombre: "Pink Lemonade", disponible: true },
        { nombre: "Cherry Ice", disponible: true },
        { nombre: "Clear", disponible: true },
        { nombre: "Blueberry Raspberry", disponible: true },
        { nombre: "Grape Ice", disponible: true }
    ] },
    { id: 19, categoria: 'vapes', activo: true, orden: 19, agotado: false, nombre: "RifBar 15K",         modelo: "15000 Puffs", precio: 75, img: "img/rifbar_15k.webp",     sabores: [
        { nombre: "Kiwi Passion Fruit Guava", disponible: true },
        { nombre: "Lush Ice", disponible: true },
        { nombre: "Blue Razz", disponible: true },
        { nombre: "Blueberry Mint", disponible: true },
        { nombre: "Sour Cranberry Grape", disponible: true },
        { nombre: "Double Apple", disponible: true },
        { nombre: "Black Ice", disponible: true }
    ] },
    { id: 20, categoria: 'vapes', activo: true, orden: 20, agotado: false, nombre: "Velocity 25K",      modelo: "25000 Puffs", precio: 35, img: "img/velocity_25k.webp",   sabores: [
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Blue Cotton Candy", disponible: true }
    ] },
    { id: 21, categoria: 'vapes', activo: true, orden: 21, agotado: false, nombre: "Novo Bar AL6000",    modelo: "6000 Puffs", precio: 25, img: "img/novo_bar_6k.webp",    sabores: [
        { nombre: "Cranberry Grape", disponible: true },
        { nombre: "Passion Fruit Lemonade", disponible: true },
        { nombre: "Cherry Cola", disponible: true }
    ] },
    { id: 22, categoria: 'vapes', activo: true, orden: 22, agotado: false, nombre: "Starx 20K",          modelo: "20000 Puffs", precio: 55, img: "img/starx_20k.webp",      sabores: [
        { nombre: "Triple Berry", disponible: true }
    ] },
    { id: 23, categoria: 'vapes', activo: true, orden: 23, agotado: false, nombre: "Bugatti 9K",        modelo: "9000 Puffs", precio: 45, img: "img/buggati_9k.webp",    sabores: [
        { nombre: "Mint Ice", disponible: true },
        { nombre: "Black Ice", disponible: true },
        { nombre: "Coffee", disponible: true },
        { nombre: "Guava Ice", disponible: true },
        { nombre: "Peach Strawberry", disponible: true },
        { nombre: "Strawberry Banana", disponible: true },
        { nombre: "Lush Ice", disponible: true },
        { nombre: "Watermelon Peach", disponible: true },
        { nombre: "Strawberry Melon", disponible: true },
        { nombre: "Double Apple", disponible: true },
        { nombre: "Mango Peach", disponible: true }
    ] },
    { id: 24, categoria: 'vapes', activo: true, orden: 24, agotado: false, nombre: "Jooyo 10K",          modelo: "10000 Puffs", precio: 30, img: "img/jooyo_10k.webp",      sabores: [
        { nombre: "Mojito", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Kiwi Passion Fruit Guava", disponible: true },
        { nombre: "Lemon Tart", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Pineapple Coconut", disponible: true },
        { nombre: "Clear", disponible: true },
        { nombre: "Milk", disponible: true },
        { nombre: "Cherry Ice", disponible: true },
        { nombre: "Mango Peach Pineapple", disponible: true }
    ] },
    { id: 25, categoria: 'vapes', activo: true, orden: 25, agotado: false, nombre: "Flonq Max 10K",      modelo: "10000 Puffs", precio: 45, img: "img/flonq_max_10k.webp",   sabores: [
        { nombre: "Cherry Peach Lemonade", disponible: true },
        { nombre: "Watermelon Ice", disponible: true },
        { nombre: "Blue Lemonade", disponible: true },
        { nombre: "Pink Lemonade", disponible: true },
        { nombre: "Yummy Bear", disponible: true },
        { nombre: "Strawberry Ice Cream", disponible: true }
    ] },
    { id: 26, categoria: 'vapes', activo: true, orden: 26, agotado: false, nombre: "Elf Bar TE 30K",     modelo: "30000 Puffs", precio: 175, img: "img/elfar_te_30k.webp",     sabores: [
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Banana Coco Ice", disponible: true },
        { nombre: "Miami Mint", disponible: true },
        { nombre: "Bubbaloo Grape", disponible: true },
        { nombre: "Cherry Strawberry", disponible: true },
        { nombre: "Strawberry Watermelon", disponible: true },
        { nombre: "Peach Strawberry", disponible: true },
        { nombre: "Blueberry Blue", disponible: true }
    ] },
    { id: 27, categoria: 'vapes', activo: true, orden: 27, agotado: false, nombre: "True Story 15K",     modelo: "15000 Puffs", precio: 50, img: "img/true_history_20k.webp",  sabores: [
        { nombre: "Grape Encounter", disponible: true },
        { nombre: "Leawles Mint", disponible: true },
        { nombre: "Peachy Heart", disponible: true },
        { nombre: "Spearmint", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Strawberry Shortcake", disponible: true },
        { nombre: "True Blue Razz", disponible: true },
        { nombre: "Violent Rainbow", disponible: true },
        { nombre: "Watermelon Bubblegum", disponible: true },
        { nombre: "Watermelon Thriller", disponible: true }
    ] },
    { id: 28, categoria: 'vapes', activo: true, orden: 28, agotado: false, nombre: "Fume x Nicky Jam",  modelo: "12000 Puffs", precio: 40, img: "img/fume_nicky_12k.webp",   sabores: [
        { nombre: "Black Hat", disponible: true },
        { nombre: "Peach", disponible: true },
        { nombre: "Ojos Rojos", disponible: true },
        { nombre: "Fresh Wine", disponible: true },
        { nombre: "Sweet Gatas", disponible: true },
        { nombre: "Menta en la Disco", disponible: true },
        { nombre: "69 Banana", disponible: true },
        { nombre: "Lush Medellin", disponible: true },
        { nombre: "Blue Miami", disponible: true },
        { nombre: "Yellow Amanecer", disponible: true },
        { nombre: "Toy Mil", disponible: true },
        { nombre: "Crangri Bear", disponible: true },
        { nombre: "Fenix Beach", disponible: true },
        { nombre: "Caloe Juice", disponible: true },
        { nombre: "Fantasia Fume", disponible: true }
    ] },
    { id: 29, categoria: 'vapes', activo: true, orden: 29, agotado: false, nombre: "RifBar Astro 7.5K",  modelo: "7500 Puffs", precio: 27, img: "img/rifbar_astro_7.5k.webp",   sabores: [
        { nombre: "Mint Ice", disponible: true },
        { nombre: "Strazz", disponible: true },
        { nombre: "Double Apple", disponible: true },
        { nombre: "Malibu", disponible: true },
        { nombre: "Banana Ice", disponible: true },
        { nombre: "Lemonade", disponible: true },
        { nombre: "Mint Gum", disponible: true },
        { nombre: "Black Ice", disponible: true },
        { nombre: "Sunset", disponible: true },
        { nombre: "Triple Berry", disponible: true },
        { nombre: "Strawberry Mango", disponible: true },
        { nombre: "Blueberry Razz", disponible: true },
        { nombre: "Pineapple", disponible: true }
    ] },
    { id: 30, categoria: 'vapes', activo: true, orden: 30, agotado: false, nombre: "Fire XL 6K",  modelo: "6000 Puffs", precio: 15, img: "img/fire_XL_6k.webp",   sabores: [
        { nombre: "Juice Orange", disponible: true },
        { nombre: "Green Apple", disponible: true },
        { nombre: "Soul Mint", disponible: true }
    ] },
    // ========== PRODUCTOS WAKA DESACTIVADOS (SIN IMAGEN REAL) ==========
    { id: 31, categoria: 'vapes', activo: false, orden: 31, agotado: false, nombre: "Waka soPro PA10000",  modelo: "10000 Puffs", precio: 180, img: "img/wakasopro.webp",   sabores: [
        { nombre: "Orange Lime", disponible: true },
        { nombre: "Grape Apple", disponible: true },
        { nombre: "Berry Watermelon", disponible: true },
        { nombre: "Lemon Lime", disponible: true },
        { nombre: "Triple Berry", disponible: true },
        { nombre: "Strawberry Mango", disponible: true },
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Strawberry Burst", disponible: true },
        { nombre: "Cherry Lemon", disponible: true },
        { nombre: "Blueberry Raspberry", disponible: true },
        { nombre: "Mr. Blue", disponible: true },
        { nombre: "Grape Ice", disponible: true },
        { nombre: "Apple Watermelon", disponible: true },
        { nombre: "Green Grape", disponible: true },
        { nombre: "Blue Raz", disponible: true },
        { nombre: "Peach Apricot", disponible: true },
        { nombre: "Classic Tobacco", disponible: true }
    ] },
    { id: 32, categoria: 'vapes', activo: false, orden: 32, agotado: false, nombre: "Waka soPro DM8000i", modelo: "8000 Puffs", precio: 180, img: "img/wakadm8000.webp", sabores: [
        { nombre: "Strawberry Watermelon Bubblegum", disponible: true },
        { nombre: "Tropical Mango", disponible: true },
        { nombre: "Strawberry Peach", disponible: true },
        { nombre: "Strawberry Mango", disponible: true },
        { nombre: "Blueberry Watermelon", disponible: true },
        { nombre: "Passion Fruit", disponible: true },
        { nombre: "Blackcurrant Berry", disponible: true },
        { nombre: "Watermelon Chill", disponible: true },
        { nombre: "Mango Peach Ice", disponible: true },
        { nombre: "Peach Apricot", disponible: true },
        { nombre: "Cool Mint", disponible: true },
        { nombre: "Mango Orange Pineapple", disponible: true },
        { nombre: "Strawberry Apple", disponible: true },
        { nombre: "Strawberry Ice", disponible: true }
    ] },
    { id: 33, categoria: 'vapes', activo: false, orden: 33, agotado: false, nombre: "Waka sMatch MB6000", modelo: "6000 Puffs", precio: 150, img: "img/wakamb6000.webp", sabores: [
        { nombre: "Passion Fruit", disponible: true },
        { nombre: "Mango Peach Ice", disponible: true },
        { nombre: "Iced Orange Citrus", disponible: true },
        { nombre: "Blackcurrant Apple", disponible: true },
        { nombre: "Strawberry Burst", disponible: true },
        { nombre: "Mango Orange Pineapple", disponible: true },
        { nombre: "Strawberry Apple", disponible: true },
        { nombre: "Peach Apricot", disponible: true },
        { nombre: "Watermelon Chill", disponible: true },
        { nombre: "Strawberry Peach", disponible: true },
        { nombre: "Blueberry Watermelon", disponible: true },
        { nombre: "Lychee Melon", disponible: true },
        { nombre: "Tropical Mango", disponible: true }
    ] },
    { id: 34, categoria: 'vapes', activo: false, orden: 34, agotado: false, nombre: "Waka Slam 7000",     modelo: "7000 Puffs", precio: 200, img: "img/wakaslam.webp",   sabores: [
        { nombre: "Lush Ice", disponible: true },
        { nombre: "Blueberry Watermelon", disponible: true },
        { nombre: "Strawberry Mango", disponible: true },
        { nombre: "Raspberry Apple", disponible: true },
        { nombre: "Red Apple", disponible: true },
        { nombre: "Lemon Mint", disponible: true },
        { nombre: "Strawberry Peach", disponible: true },
        { nombre: "Mixed Berry", disponible: true },
        { nombre: "Mango Peach", disponible: true },
        { nombre: "Blueberry Cherry Cranberry", disponible: true },
        { nombre: "Guava Passion Kiwi", disponible: true }
    ] },
    // ========== PRODUCTOS CON IMAGEN REAL (NECESITAN DATOS) ==========
    { id: 35, categoria: 'vapes', activo: true, orden: 35, agotado: false, nombre: "Caliburn GK3 6K",    modelo: "6000 Puffs", precio: 25, img: "img/calibur_6k.webp", sabores: [
        { nombre: "Grape Ice", disponible: true },
        { nombre: "Miami Mint", disponible: true },
        { nombre: "Double Apple", disponible: true },
        { nombre: "Dragon Fruit Berry", disponible: true },
        { nombre: "Strawberry Kiwi", disponible: true },
        { nombre: "Mango Honeydew", disponible: true },
        { nombre: "White Gummy", disponible: true },
        { nombre: "Blue Razz", disponible: true },
        { nombre: "Peach Watermelon", disponible: true },
        { nombre: "Mixed Berries", disponible: true },
        { nombre: "Crazy Berry", disponible: true }
    ] },
    { id: 36, categoria: 'vapes', activo: true, orden: 36, agotado: true, nombre: "Maskking Turboo 10K",  modelo: "10000 Puffs", precio: 50, img: "img/masking_turboo_10k.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    // ========== BORRADORES (PLANTILLAS SIN DATOS REALES) ==========
    { id: 37, categoria: 'vapes', activo: false, orden: 37, agotado: false, nombre: "Vape Nuevo 37",  modelo: "10000 Puffs", precio: 300, img: "img/vape_37.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 38, categoria: 'vapes', activo: false, orden: 38, agotado: false, nombre: "Vape Nuevo 38",  modelo: "10000 Puffs", precio: 300, img: "img/vape_38.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 39, categoria: 'vapes', activo: false, orden: 39, agotado: false, nombre: "Vape Nuevo 39",  modelo: "10000 Puffs", precio: 300, img: "img/vape_39.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 40, categoria: 'vapes', activo: false, orden: 40, agotado: false, nombre: "Vape Nuevo 40",  modelo: "10000 Puffs", precio: 300, img: "img/vape_40.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 41, categoria: 'vapes', activo: false, orden: 41, agotado: false, nombre: "Vape Nuevo 41",  modelo: "10000 Puffs", precio: 300, img: "img/vape_41.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 42, categoria: 'vapes', activo: false, orden: 42, agotado: false, nombre: "Vape Nuevo 42",  modelo: "10000 Puffs", precio: 300, img: "img/vape_42.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 43, categoria: 'vapes', activo: false, orden: 43, agotado: false, nombre: "Vape Nuevo 43",  modelo: "10000 Puffs", precio: 300, img: "img/vape_43.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 44, categoria: 'vapes', activo: false, orden: 44, agotado: false, nombre: "Vape Nuevo 44",  modelo: "10000 Puffs", precio: 300, img: "img/vape_44.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 45, categoria: 'vapes', activo: false, orden: 45, agotado: false, nombre: "Vape Nuevo 45",  modelo: "10000 Puffs", precio: 300, img: "img/vape_45.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 46, categoria: 'vapes', activo: false, orden: 46, agotado: false, nombre: "Vape Nuevo 46",  modelo: "10000 Puffs", precio: 300, img: "img/vape_46.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 47, categoria: 'vapes', activo: false, orden: 47, agotado: false, nombre: "Vape Nuevo 47",  modelo: "10000 Puffs", precio: 300, img: "img/vape_47.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 48, categoria: 'vapes', activo: false, orden: 48, agotado: false, nombre: "Vape Nuevo 48",  modelo: "10000 Puffs", precio: 300, img: "img/vape_48.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 49, categoria: 'vapes', activo: false, orden: 49, agotado: false, nombre: "Vape Nuevo 49",  modelo: "10000 Puffs", precio: 300, img: "img/vape_49.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] },
    { id: 50, categoria: 'vapes', activo: false, orden: 50, agotado: false, nombre: "Vape Nuevo 50",  modelo: "10000 Puffs", precio: 300, img: "img/vape_50.webp",   sabores: [
        { nombre: "Sabor 1", disponible: true },
        { nombre: "Sabor 2", disponible: true },
        { nombre: "Sabor 3", disponible: true },
        { nombre: "Sabor 4", disponible: true }
    ] }
];
