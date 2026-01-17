// ============================================================
// 📦 PRODUCTOS - WAKA VAPES MAYORISTA
// ============================================================
// Archivo de productos - Fácil de editar
// Las imágenes están en la carpeta img/
// Para agregar imagen: img/nombre_archivo.webp
// ============================================================

const listaProductos = [

    // ╔════════════════════════════════════════════════════════╗
    // ║                    🔥 WAKA (1-5)                       ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 1,  categoria: 'vapes', activo: true, orden: 1,  nombre: "Waka 15K",      modelo: "15000 Puffs",  precio: 160, img: "img/waka_15k.webp",       sabores: [{ nombre: "Sandía Ice", disponible: true }, { nombre: "Mango Tropical", disponible: true }, { nombre: "Uva Morada", disponible: true }, { nombre: "Fresa Kiwi", disponible: true }] },
    { id: 2,  categoria: 'vapes', activo: true, orden: 2,  nombre: "Waka Blade",    modelo: "33000 Puffs",  precio: 210, img: "img/waka_blade_33k.webp", sabores: [{ nombre: "Blue Razz", disponible: true }, { nombre: "Menta Fresca", disponible: true }, { nombre: "Piña Colada", disponible: true }, { nombre: "Melocotón Ice", disponible: true }] },
    { id: 3,  categoria: 'vapes', activo: true, orden: 3,  nombre: "Waka Burst",    modelo: "36000 Puffs",  precio: 220, img: "img/waka_burst_36k.webp", sabores: [{ nombre: "Limonada Rosa", disponible: true }, { nombre: "Mango Durazno", disponible: true }, { nombre: "Sandía Fresa", disponible: true }, { nombre: "Uva Ice", disponible: true }] },
    { id: 4,  categoria: 'vapes', activo: true, orden: 4,  nombre: "Waka Slim",     modelo: "12000 Puffs",  precio: 145, img: "img/waka_slim_12k.webp",  sabores: [{ nombre: "Cherry Cola", disponible: true }, { nombre: "Manzana Verde", disponible: true }, { nombre: "Fresa Banana", disponible: true }, { nombre: "Kiwi Pasión", disponible: true }] },
    { id: 5,  categoria: 'vapes', activo: true, orden: 5,  nombre: "Waka Titan",    modelo: "30000 Puffs",  precio: 200, img: "img/waka_titan_30k.webp", sabores: [{ nombre: "Dragon Fruit", disponible: true }, { nombre: "Lichi Ice", disponible: true }, { nombre: "Mora Azul", disponible: true }, { nombre: "Melón Miel", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                   CALIBUR (6-7)                        ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 6,  categoria: 'vapes', activo: true, orden: 6,  nombre: "Calibur",       modelo: "6000 Puffs",   precio: 25, img: "img/calibur_6k.webp",     sabores: [{ nombre: "Guayaba Ice", disponible: true }, { nombre: "Fresa Crema", disponible: true }, { nombre: "Mango Menta", disponible: true }, { nombre: "Naranja Mandarina", disponible: true }] },
    { id: 7,  categoria: 'vapes', activo: true, orden: 7,  nombre: "Calibur Pro",   modelo: "18000 Puffs",  precio: 30, img: "img/calibur_18k.webp",    sabores: [{ nombre: "Cereza Limonada", disponible: true }, { nombre: "Frutos Rojos", disponible: true }, { nombre: "Mango Ice", disponible: true }, { nombre: "Grape Mint", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                   EB DESIGN (8)                        ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 8,  categoria: 'vapes', activo: true, orden: 8,  nombre: "EB Design TE",  modelo: "6000 Puffs",   precio: 15, img: "img/ebdesing_te_6k.webp", sabores: [{ nombre: "Chicle Menta", disponible: true }, { nombre: "Algodón Dulce", disponible: true }, { nombre: "Caramelo", disponible: true }, { nombre: "Vainilla Crema", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                     ELUX (9)                           ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 9,  categoria: 'vapes', activo: true, orden: 9,  nombre: "Elux",          modelo: "18000 Puffs",  precio: 65, img: "img/elux_18k.webp",       sabores: [{ nombre: "Banana Ice", disponible: true }, { nombre: "Papaya", disponible: true }, { nombre: "Coco Piña", disponible: true }, { nombre: "Maracuyá", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                 FIRE ROSE / XL (10-11)                 ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 10, categoria: 'vapes', activo: true, orden: 10, nombre: "Fire Rose",     modelo: "25000 Puffs",  precio: 45, img: "img/fire_rose_25k.webp",  sabores: [{ nombre: "Sour Apple", disponible: true }, { nombre: "Sour Rainbow Candy", disponible: true }, { nombre: "Watermelon Ice", disponible: true }, { nombre: "Watermelon Peach", disponible: true }, { nombre: "Dragon Stranana", disponible: true }, { nombre: "Red Bom", disponible: true }] },
    { id: 11, categoria: 'vapes', activo: true, orden: 11, nombre: "Fire XL",       modelo: "6000 Puffs",   precio: 15, img: "img/fire_XL_6k.webp",     sabores: [{ nombre: "Virginia Tobacco", disponible: true }, { nombre: "Mint", disponible: true }, { nombre: "Mango", disponible: true }, { nombre: "Crème", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                   FLAMINGO (12)                        ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 12, categoria: 'vapes', activo: true, orden: 12, nombre: "Flamingo",      modelo: "30000 Puffs",  precio: 70, img: "img/flamingo_30k.webp",   sabores: [{ nombre: "Banana Coconut", disponible: true }, { nombre: "Blue Raspberry Magic Cotton", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                    FROZEEN (13)                        ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 13, categoria: 'vapes', activo: true, orden: 13, nombre: "Frozeen",       modelo: "7000 Puffs",   precio: 20, img: "img/frozeen_7k.webp",     sabores: [{ nombre: "Cool Mint", disponible: true }, { nombre: "Lush Ice", disponible: true }, { nombre: "Peach Ice", disponible: true }, { nombre: "Pink Lemonade", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                  FUMAN SPIRIT (14)                     ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 14, categoria: 'vapes', activo: true, orden: 14, nombre: "Fuman Spirit",  modelo: "8000 Puffs",   precio: 25, img: "img/fuman_spirit_8k.webp", sabores: [{ nombre: "Lemon Tart", disponible: true }, { nombre: "Blueberry", disponible: true }, { nombre: "Strawberry", disponible: true }, { nombre: "Pineapple Ice", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                     HALO (15)                          ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 15, categoria: 'vapes', activo: true, orden: 15, nombre: "Halo",          modelo: "30000 Puffs",  precio: 105, img: "img/halo_30k.webp",      sabores: [{ nombre: "Purple Rain", disponible: true }, { nombre: "Tropical Punch", disponible: true }, { nombre: "Rainbow Candy", disponible: true }, { nombre: "Fresh Vanilla", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                   HAND SHAKE (16)                      ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 16, categoria: 'vapes', activo: true, orden: 16, nombre: "Hand Shake",    modelo: "15000 Puffs",  precio: 55, img: "img/hand_shake_15k.webp", sabores: [{ nombre: "Sour Apple Ice", disponible: true }, { nombre: "Neon Rain", disponible: true }, { nombre: "Pina Colada", disponible: true }, { nombre: "Bananas Ice", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                    iPLAY (17-18)                       ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 17, categoria: 'vapes', activo: true, orden: 17, nombre: "iPlay Box",     modelo: "4000 Puffs",   precio: 145, img: "img/iplay_box_4k.webp",   sabores: [{ nombre: "Lush Ice", disponible: true }, { nombre: "Strawberry Banana", disponible: true }, { nombre: "Cool Mint", disponible: true }, { nombre: "Peach Ice", disponible: true }] },
    { id: 18, categoria: 'vapes', activo: true, orden: 18, nombre: "iPlay Box Pro", modelo: "15000 Puffs",  precio: 165, img: "img/iplay_boxpro_15k.webp", sabores: [{ nombre: "Cherry Cranberry", disponible: true }, { nombre: "Coco Strawberry", disponible: true }, { nombre: "Cool Mint", disponible: true }, { nombre: "Grape Strawberry", disponible: true }, { nombre: "Kiwi Strawberry", disponible: true }, { nombre: "Mamba", disponible: true }, { nombre: "Pink Lemonade", disponible: true }, { nombre: "Strawberry Watermelon", disponible: true }, { nombre: "Tulum Mint", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                   MASKKING (19)                        ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 19, categoria: 'vapes', activo: true, orden: 19, nombre: "Maskking Turbo", modelo: "10000 Puffs", precio: 50, img: "img/masking_turboo_10k.webp", sabores: [{ nombre: "Classic Tobacco", disponible: true }, { nombre: "Mint", disponible: true }, { nombre: "Berry Mix", disponible: true }, { nombre: "Citrus Burst", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                  PILLOW TALK (20)                      ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 20, categoria: 'vapes', activo: true, orden: 20, nombre: "Pillow Talk",   modelo: "8500 Puffs",   precio: 38, img: "img/pillow_talk_8.5k.webp", sabores: [{ nombre: "Tango Mango", disponible: true }, { nombre: "Toffee Nut", disponible: true }, { nombre: "Peach Mango Pineapple", disponible: true }, { nombre: "Sweet Mint", disponible: true }, { nombre: "Strawnana", disponible: true }, { nombre: "Pink Whip Cream", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                   RIFBAR (21-22)                       ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 21, categoria: 'vapes', activo: true, orden: 21, nombre: "RifBar",        modelo: "15000 Puffs",  precio: 75, img: "img/rifbar_15k.webp",     sabores: [{ nombre: "Apple Peach", disponible: true }, { nombre: "Blueberry Pomegranate", disponible: true }, { nombre: "Strawberry Ice Cream", disponible: true }, { nombre: "Watermelon Lime", disponible: true }] },
    { id: 22, categoria: 'vapes', activo: true, orden: 22, nombre: "RifBar Astro",  modelo: "7500 Puffs",   precio: 27, img: "img/rifbar_astro_7.5k.webp", sabores: [{ nombre: "Golden Tobacco", disponible: true }, { nombre: "Rich Tobacco", disponible: true }, { nombre: "Menthol", disponible: true }, { nombre: "Mint", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                  RONALDINHO (23)                       ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 23, categoria: 'vapes', activo: true, orden: 23, nombre: "Ronaldinho 10", modelo: "15000 Puffs",  precio: 35, img: "img/ronaldinho10_15k.webp", sabores: [{ nombre: "Carolina Bold", disponible: true }, { nombre: "Classic Tobacco", disponible: true }, { nombre: "Magnificent Menthol", disponible: true }, { nombre: "Polar Mint", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                    SOLARIS (24)                        ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 24, categoria: 'vapes', activo: true, orden: 24, nombre: "Solaris",       modelo: "25000 Puffs",  precio: 75, img: "img/solaris_25k.webp",    sabores: [{ nombre: "Iced Apple Mango", disponible: true }, { nombre: "Cubano", disponible: true }, { nombre: "Tropical Fruit", disponible: true }, { nombre: "Summer Strawberry", disponible: true }] },

    // ╔════════════════════════════════════════════════════════╗
    // ║                   VELOCITY (25)                        ║
    // ╚════════════════════════════════════════════════════════╝
    { id: 25, categoria: 'vapes', activo: true, orden: 25, nombre: "Velocity",      modelo: "25000 Puffs",  precio: 35, img: "img/velocity_25k.webp",   sabores: [{ nombre: "Watermelon Ice", disponible: true }, { nombre: "Grape Ice", disponible: true }, { nombre: "Peach Ice", disponible: true }, { nombre: "Double Apple", disponible: true }] },


    // ╔════════════════════════════════════════════════════════╗
    // ║           🆕 ESPACIOS PARA FUTUROS VAPES (26-50)       ║
    // ║      Cambia activo: false → true cuando agregues      ║
    // ║      la imagen en img/nombre.webp                     ║
    // ╚════════════════════════════════════════════════════════╝

    { id: 26, categoria: 'vapes', activo: false, orden: 26, nombre: "Vape Nuevo 26",  modelo: "10000 Puffs", precio: 300, img: "img/vape_26.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 27, categoria: 'vapes', activo: false, orden: 27, nombre: "Vape Nuevo 27",  modelo: "10000 Puffs", precio: 300, img: "img/vape_27.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 28, categoria: 'vapes', activo: false, orden: 28, nombre: "Vape Nuevo 28",  modelo: "10000 Puffs", precio: 300, img: "img/vape_28.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 29, categoria: 'vapes', activo: false, orden: 29, nombre: "Vape Nuevo 29",  modelo: "10000 Puffs", precio: 300, img: "img/vape_29.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 30, categoria: 'vapes', activo: false, orden: 30, nombre: "Vape Nuevo 30",  modelo: "10000 Puffs", precio: 300, img: "img/vape_30.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 31, categoria: 'vapes', activo: false, orden: 31, nombre: "Vape Nuevo 31",  modelo: "10000 Puffs", precio: 300, img: "img/vape_31.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 32, categoria: 'vapes', activo: false, orden: 32, nombre: "Vape Nuevo 32",  modelo: "10000 Puffs", precio: 300, img: "img/vape_32.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 33, categoria: 'vapes', activo: false, orden: 33, nombre: "Vape Nuevo 33",  modelo: "10000 Puffs", precio: 300, img: "img/vape_33.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 34, categoria: 'vapes', activo: false, orden: 34, nombre: "Vape Nuevo 34",  modelo: "10000 Puffs", precio: 300, img: "img/vape_34.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 35, categoria: 'vapes', activo: false, orden: 35, nombre: "Vape Nuevo 35",  modelo: "10000 Puffs", precio: 300, img: "img/vape_35.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 36, categoria: 'vapes', activo: false, orden: 36, nombre: "Vape Nuevo 36",  modelo: "10000 Puffs", precio: 300, img: "img/vape_36.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 37, categoria: 'vapes', activo: false, orden: 37, nombre: "Vape Nuevo 37",  modelo: "10000 Puffs", precio: 300, img: "img/vape_37.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 38, categoria: 'vapes', activo: false, orden: 38, nombre: "Vape Nuevo 38",  modelo: "10000 Puffs", precio: 300, img: "img/vape_38.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 39, categoria: 'vapes', activo: false, orden: 39, nombre: "Vape Nuevo 39",  modelo: "10000 Puffs", precio: 300, img: "img/vape_39.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 40, categoria: 'vapes', activo: false, orden: 40, nombre: "Vape Nuevo 40",  modelo: "10000 Puffs", precio: 300, img: "img/vape_40.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 41, categoria: 'vapes', activo: false, orden: 41, nombre: "Vape Nuevo 41",  modelo: "10000 Puffs", precio: 300, img: "img/vape_41.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 42, categoria: 'vapes', activo: false, orden: 42, nombre: "Vape Nuevo 42",  modelo: "10000 Puffs", precio: 300, img: "img/vape_42.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 43, categoria: 'vapes', activo: false, orden: 43, nombre: "Vape Nuevo 43",  modelo: "10000 Puffs", precio: 300, img: "img/vape_43.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 44, categoria: 'vapes', activo: false, orden: 44, nombre: "Vape Nuevo 44",  modelo: "10000 Puffs", precio: 300, img: "img/vape_44.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 45, categoria: 'vapes', activo: false, orden: 45, nombre: "Vape Nuevo 45",  modelo: "10000 Puffs", precio: 300, img: "img/vape_45.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 46, categoria: 'vapes', activo: false, orden: 46, nombre: "Vape Nuevo 46",  modelo: "10000 Puffs", precio: 300, img: "img/vape_46.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 47, categoria: 'vapes', activo: false, orden: 47, nombre: "Vape Nuevo 47",  modelo: "10000 Puffs", precio: 300, img: "img/vape_47.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 48, categoria: 'vapes', activo: false, orden: 48, nombre: "Vape Nuevo 48",  modelo: "10000 Puffs", precio: 300, img: "img/vape_48.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 49, categoria: 'vapes', activo: false, orden: 49, nombre: "Vape Nuevo 49",  modelo: "10000 Puffs", precio: 300, img: "img/vape_49.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] },
    { id: 50, categoria: 'vapes', activo: false, orden: 50, nombre: "Vape Nuevo 50",  modelo: "10000 Puffs", precio: 300, img: "img/vape_50.webp",   sabores: [{ nombre: "Sabor 1", disponible: true }, { nombre: "Sabor 2", disponible: true }, { nombre: "Sabor 3", disponible: true }, { nombre: "Sabor 4", disponible: true }] }
];
