import { useState } from 'react';
import img1 from "../images/ель.png"
import "../css/style.css";
import img2 from "../images/таволга.png"
import img3 from "../images/клен.png"
import img4 from "../images/кровохлебка.png"
import img5 from "../images/мать-и-мачеха.png"
import img6 from "../images/лисица.png"
import img7 from "../images/калина.png"
import img8 from "../images/осина.png"
import img9 from "../images/лось.png"
import img10 from "../images/сосна.png"
import img11 from "../images/черемуха.png"
import img12 from "../images/дуб.png"
import img13 from "../images/береза.png"
import img14 from "../images/тополь.png"
import img15 from "../images/кедр.png"
import img16 from "../images/пихта.png"
import img17 from "../images/липа.png"
import img18 from "../images/бодяк.png"
import img19 from "../images/борщевик.png"
import img20 from "../images/клевер.png"
import img21 from "../images/полынь.png"
import img22 from "../images/подорожник.png"
import img23 from "../images/бурундук.png"
import img24 from "../images/бурый медведь.png"
import img25 from "../images/соловей.png"
import img26 from "../images/дятел.png"
import img27 from "../images/соболь.png"
import img28 from "../images/бобр.png"
import img29 from "../images/синица.png"

import modalimg1 from "../modalimg/ель.png"
import modalimg2 from "../modalimg/таволга.png"
import modalimg3 from "../modalimg/клен.png"
import modalimg4 from "../modalimg/кровохлебка.png"
import modalimg5 from "../modalimg/мать-и-мачеха.png"
import modalimg6 from "../modalimg/лиса.png"
import modalimg7 from "../modalimg/калина.png"
import modalimg8 from "../modalimg/осина.png"
import modalimg9 from "../modalimg/лось.png"
import modalimg10 from "../modalimg/сосна.png"
import modalimg11 from "../modalimg/черемуха.png"
import modalimg12 from "../modalimg/дуб.png"
import modalimg13 from "../modalimg/береза.png"
import modalimg14 from "../modalimg/тополь.png"
import modalimg15 from "../modalimg/кедр.png"
import modalimg16 from "../modalimg/пихта.png"
import modalimg17 from "../modalimg/липа.png"
import modalimg18 from "../modalimg/бодяк.png"
import modalimg19 from "../modalimg/борщевик.png"
import modalimg20 from "../modalimg/клевер.png"
import modalimg21 from "../modalimg/полынь.png"
import modalimg22 from "../modalimg/подорожник.png"
import modalimg23 from "../modalimg/бурундук.png"
import modalimg24 from "../modalimg/бурый медведь.png"
import modalimg25 from "../modalimg/соловей.png"
import modalimg26 from "../modalimg/дятел.png"
import modalimg27 from "../modalimg/соболь.png"
import modalimg28 from "../modalimg/бобр.png"
import modalimg29 from "../modalimg/синица.png"

function getHabitatByName(data, speciesName) {
    // Ищем таблицу Species
    const speciesTable = data.objects.find(obj => obj.name === "Species");
    
    if (!speciesTable) {
        return "Таблица Species не найдена";
    }
    
    // Ищем строку с нужным названием вида
    const speciesRow = speciesTable.rows.find(row => row[1] === speciesName);
    
    if (!speciesRow) {
        return `Вид "${speciesName}" не найден в базе данных`;
    }
    
    return speciesRow[2];
}

function getModalImageByName(name) {
    const imageMap = {
        // Деревья
        'Ель': modalimg1,
        'Клен': modalimg3,
        'Осина': modalimg8,
        'Сосна': modalimg10,
        'Дуб': modalimg12,
        'Береза': modalimg13,
        'Тополь': modalimg14,
        'Кедр': modalimg15,
        'Пихта': modalimg16,
        'Липа': modalimg17,
        
        // Растения
        'Таволга': modalimg2,
        'Кровохлебка': modalimg4,
        'Мать-и-мачеха': modalimg5,
        'Калина': modalimg7,
        'Черемуха': modalimg11,
        'Бодяк': modalimg18,
        'Борщевик': modalimg19,
        'Клевер': modalimg20,
        'Полынь': modalimg21,
        'Подорожник': modalimg22,
        
        // Животные
        'Лиса': modalimg6,
        'Лось': modalimg9,
        'Бурундук': modalimg23,
        'Бурый медведь': modalimg24,
        'Соловей': modalimg25,
        'Дятел': modalimg26,
        'Соболь': modalimg27,
        'Бобр': modalimg28,
        'Синица': modalimg29
    };

    // Возвращаем изображение или null, если имя не найдено
    return imageMap[name] || null;
}

const jsonData = require("../projectdb.json")

const Home = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});
    const [modalImageSrc, setModalImageSrc] = useState(null);

    const getObjectInfo = (id) => {
        const infoMap = {
            // Деревья(ель)
            'img1': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Ель") },
            'img2': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Ель") },
            'img3': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Ель") },
            'img4': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Ель") },
            'img5': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Ель") },
            'img6': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Ель") },
            'img7': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Ель") },

            // Растение(таволга)
            'img8': { name: 'Таволга', type: 'растение', family: 'Розоцветные', description: getHabitatByName(jsonData, "Таволга") },

            // Деревья(клен)
            'img9': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: getHabitatByName(jsonData, "Клен") },
            'img10': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: getHabitatByName(jsonData, "Клен") },
            'img11': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: getHabitatByName(jsonData, "Клен") },
            'img12': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: getHabitatByName(jsonData, "Клен") },
            'img13': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: getHabitatByName(jsonData, "Клен") },
            'img14': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: getHabitatByName(jsonData, "Клен") },
            'img15': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: getHabitatByName(jsonData, "Клен") },

            // Растение(кровохлебка)
            'img16': { name: 'Кровохлебка', type: 'растение', family: 'Розоцветные', description: getHabitatByName(jsonData, "Кровохлебка") },

            // Растение(мать-и-мачеха)
            'img17': { name: 'Мать-и-мачеха', type: 'растение', family: 'Астровые', description: getHabitatByName(jsonData, "Мать-и-мачеха") },

            // Животные(лисица)
            'img18': { name: 'Лиса', type: 'животное', family: 'Псовые', description: getHabitatByName(jsonData, "Лиса") },

            // Растение(калина)
            'img19': { name: 'Калина', type: 'растение', family: 'Адоксовые', description: getHabitatByName(jsonData, "Калина") },

            // Деревья(осина)
            'img20': { name: 'Осина', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Осина") },
            'img21': { name: 'Осина', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Осина") },
            'img22': { name: 'Осина', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Осина") },

            // Животные(лось)
            'img23': { name: 'Лось', type: 'животное', family: 'Оленевые', description: getHabitatByName(jsonData, "Лось") },

            // Деревья(сосна)
            'img24': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Сосна") },
            'img25': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Сосна") },
            'img26': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Сосна") },
            'img27': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Сосна") },
            'img28': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Сосна") },
            'img29': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Сосна") },
            'img30': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Сосна") },

            // Растение(черемуха)
            'img31': { name: 'Черемуха', type: 'растение', family: 'Розоцветные', description: getHabitatByName(jsonData, "Черемуха") },

            // Деревья(дуб)
            'img32': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: getHabitatByName(jsonData, "Дуб") },
            'img33': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: getHabitatByName(jsonData, "Дуб") },
            'img34': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: getHabitatByName(jsonData, "Дуб") },
            'img35': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: getHabitatByName(jsonData, "Дуб") },
            'img36': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: getHabitatByName(jsonData, "Дуб") },

            // Деревья(береза)
            'img37': { name: 'Береза', type: 'дерево', family: 'Березовые', description: getHabitatByName(jsonData, "Береза") },
            'img38': { name: 'Береза', type: 'дерево', family: 'Березовые', description: getHabitatByName(jsonData, "Береза") },
            'img39': { name: 'Береза', type: 'дерево', family: 'Березовые', description: getHabitatByName(jsonData, "Береза") },
            'img40': { name: 'Береза', type: 'дерево', family: 'Березовые', description: getHabitatByName(jsonData, "Береза") },
            'img41': { name: 'Береза', type: 'дерево', family: 'Березовые', description: getHabitatByName(jsonData, "Береза") },

            // Деревья(тополь)
            'img42': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Тополь") },
            'img43': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Тополь") },
            'img44': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Тополь") },
            'img45': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Тополь") },
            'img46': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Тополь") },
            'img47': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Тополь") },
            'img48': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: getHabitatByName(jsonData, "Тополь") },

            // Деревья(кедр)
            'img49': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Кедр") },
            'img50': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Кедр") },
            'img51': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Кедр") },
            'img52': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Кедр") },
            'img53': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Кедр") },

            // Деревья(пихта)
            'img54': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Пихта") },
            'img55': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Пихта") },
            'img56': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Пихта") },
            'img57': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Пихта") },
            'img58': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: getHabitatByName(jsonData, "Пихта") },

            // Деревья(липа)
            'img59': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: getHabitatByName(jsonData, "Липа") },
            'img60': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: getHabitatByName(jsonData, "Липа") },
            'img61': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: getHabitatByName(jsonData, "Липа") },
            'img62': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: getHabitatByName(jsonData, "Липа") },
            'img63': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: getHabitatByName(jsonData, "Липа") },

            // Растение(бодяк)
            'img64': { name: 'Бодяк', type: 'растение', family: 'Астровые', description: getHabitatByName(jsonData, "Бодяк") },

            // Растение(борщевик)
            'img65': { name: 'Борщевик', type: 'растение', family: 'Зонтичные', description: getHabitatByName(jsonData, "Борщевик") },

            // Растение(клевер)
            'img66': { name: 'Клевер', type: 'растение', family: 'Бобовые', description: getHabitatByName(jsonData, "Клевер") },

            // Растение(полынь)
            'img67': { name: 'Полынь', type: 'растение', family: 'Астровые', description: getHabitatByName(jsonData, "Полынь") },

            // Растение(подорожник)
            'img68': { name: 'Подорожник', type: 'растение', family: 'Подорожниковые', description: getHabitatByName(jsonData, "Подорожник") },

            // Животные(бурундук)
            'img69': { name: 'Бурундук', type: 'животное', family: 'Беличьи', description: getHabitatByName(jsonData, "Бурундук") },

            // Животные(бурый медведь)
            'img70': { name: 'Бурый медведь', type: 'животное', family: 'Медвежьи', description: getHabitatByName(jsonData, "Бурый медведь") },

            // Животные(соловей)
            'img71': { name: 'Соловей', type: 'животное', family: 'Мухоловковые', description: getHabitatByName(jsonData, "Соловей") },

            // Животные(дятел)
            'img72': { name: 'Дятел', type: 'животное', family: 'Дятловые', description: getHabitatByName(jsonData, "Дятел") },

            // Животные(соболь)
            'img73': { name: 'Соболь', type: 'животное', family: 'Куньи', description: getHabitatByName(jsonData, "Соболь") },

            // Животные(бобр)
            'img74': { name: 'Бобр', type: 'животное', family: 'Бобровые', description: getHabitatByName(jsonData, "Бобр") },

            // Животные(синица)
            'img75': { name: 'Синица', type: 'животное', family: 'Синицевые', description: getHabitatByName(jsonData, "Синица") },
        };

        return infoMap[id] || {
            name: 'Неизвестный объект',
            type: 'не определен',
            family: 'не определено',
            description: 'Описание отсутствует'
        };
    };

    const handleImageClick = (id) => {
        setSelectedId(selectedId === id ? null : id);
        const info = getObjectInfo(id);
        const imageSrc = getModalImageByName(info.name)
        setModalContent(info);
        setShowModal(true);
        setModalImageSrc(imageSrc);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedId(null);
    };

    const images = [
        // Деревья(ель)
        { id: 'img1', src: img1, className: 'img1' },
        { id: 'img2', src: img1, className: 'img2' },
        { id: 'img3', src: img1, className: 'img3' },
        { id: 'img4', src: img1, className: 'img4' },
        { id: 'img5', src: img1, className: 'img5' },
        { id: 'img6', src: img1, className: 'img6' },
        { id: 'img7', src: img1, className: 'img7' },

        // Растение(таволга)
        { id: 'img8', src: img2, className: 'img8' },

        // Деревья(клен)
        { id: 'img9', src: img3, className: 'img9' },
        { id: 'img10', src: img3, className: 'img10' },
        { id: 'img11', src: img3, className: 'img11' },
        { id: 'img12', src: img3, className: 'img12' },
        { id: 'img13', src: img3, className: 'img13' },
        { id: 'img14', src: img3, className: 'img14' },
        { id: 'img15', src: img3, className: 'img15' },

        // Растение(кровохлебка)
        { id: 'img16', src: img4, className: 'img16' },

        // Растение(мать-и-мачеха)
        { id: 'img17', src: img5, className: 'img17' },

        // Животные(лисица)
        { id: 'img18', src: img6, className: 'img18' },

        // Растение(калина)
        { id: 'img19', src: img7, className: 'img19' },

        // Деревья(осина)
        { id: 'img20', src: img8, className: 'img20' },
        { id: 'img21', src: img8, className: 'img21' },
        { id: 'img22', src: img8, className: 'img22' },

        // Животные(лось)
        { id: 'img23', src: img9, className: 'img23' },

        // Деревья(сосна)
        { id: 'img24', src: img10, className: 'img24' },
        { id: 'img25', src: img10, className: 'img25' },
        { id: 'img26', src: img10, className: 'img26' },
        { id: 'img27', src: img10, className: 'img27' },
        { id: 'img28', src: img10, className: 'img28' },
        { id: 'img29', src: img10, className: 'img29' },
        { id: 'img30', src: img10, className: 'img30' },

        // Растение(черемуха)
        { id: 'img31', src: img11, className: 'img31' },

        // Деревья(дуб)
        { id: 'img32', src: img12, className: 'img32' },
        { id: 'img33', src: img12, className: 'img33' },
        { id: 'img34', src: img12, className: 'img34' },
        { id: 'img35', src: img12, className: 'img35' },
        { id: 'img36', src: img12, className: 'img36' },

        // Деревья(береза)
        { id: 'img37', src: img13, className: 'img37' },
        { id: 'img38', src: img13, className: 'img38' },
        { id: 'img39', src: img13, className: 'img39' },
        { id: 'img40', src: img13, className: 'img40' },
        { id: 'img41', src: img13, className: 'img41' },

        // Деревья(тополь)
        { id: 'img42', src: img14, className: 'img42' },
        { id: 'img43', src: img14, className: 'img43' },
        { id: 'img44', src: img14, className: 'img44' },
        { id: 'img45', src: img14, className: 'img45' },
        { id: 'img46', src: img14, className: 'img46' },
        { id: 'img47', src: img14, className: 'img47' },
        { id: 'img48', src: img14, className: 'img48' },

        // Деревья(кедр)
        { id: 'img49', src: img15, className: 'img49' },
        { id: 'img50', src: img15, className: 'img50' },
        { id: 'img51', src: img15, className: 'img51' },
        { id: 'img52', src: img15, className: 'img52' },
        { id: 'img53', src: img15, className: 'img53' },

        // Деревья(пихта)
        { id: 'img54', src: img16, className: 'img54' },
        { id: 'img55', src: img16, className: 'img55' },
        { id: 'img56', src: img16, className: 'img56' },
        { id: 'img57', src: img16, className: 'img57' },
        { id: 'img58', src: img16, className: 'img58' },

        // Деревья(липа)
        { id: 'img59', src: img17, className: 'img59' },
        { id: 'img60', src: img17, className: 'img60' },
        { id: 'img61', src: img17, className: 'img61' },
        { id: 'img62', src: img17, className: 'img62' },
        { id: 'img63', src: img17, className: 'img63' },

        // Растение(бодяк)
        { id: 'img64', src: img18, className: 'img64' },

        // Растение(борщевик)
        { id: 'img65', src: img19, className: 'img65' },

        // Растение(клевер)
        { id: 'img66', src: img20, className: 'img66' },

        // Растение(полынь)
        { id: 'img67', src: img21, className: 'img67' },

        // Растение(подорожник)
        { id: 'img68', src: img22, className: 'img68' },

        // Животные(бурундук)
        { id: 'img69', src: img23, className: 'img69' },

        // Животные(бурый медведь)
        { id: 'img70', src: img24, className: 'img70' },

        // Животные(соловей)
        { id: 'img71', src: img25, className: 'img71' },

        // Животные(дятел)
        { id: 'img72', src: img26, className: 'img72' },

        // Животные(соболь)
        { id: 'img73', src: img27, className: 'img73' },

        // Животные(бобр)
        { id: 'img74', src: img28, className: 'img74' },

        // Животные(синица)
        { id: 'img75', src: img29, className: 'img75' },
    ];

    return (
        <div className="container">
            {images.map((image) => (
                <img
                    key={image.id}
                    src={image.src}
                    alt=""
                    className={`${image.className} ${selectedId === image.id ? 'selected' : ''}`}
                    onClick={() => handleImageClick(image.id)}
                />
            ))}

            {/* Модальное окно  */}
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-right" onClick={(e) => e.stopPropagation()}
                        >
                        <div className="modal-header">
                            <h2 className="modal-category">{modalContent.type}</h2>
                        </div>

                        <div className="modal-body">
                            <div className="modal-image-container">
                                <img 
                                    src={modalImageSrc} 
                                    alt={modalContent.name} 
                                    className="modal-image"
                                    style={{
                                        maxWidth: '250px',
                                        maxHeight: '200px',
                                        width: 'auto',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                                    }}
                                />
                            </div>
                            <div className="info-item">
                                <div className="info-label">Название:</div>
                                <div className="info-value">{modalContent.name}</div>
                            </div>

                            <div className="info-item">
                                <div className="info-label">Семейство:</div>
                                <div className="info-value">{modalContent.family}</div>
                            </div>

                            <div className="info-divider"></div>

                            <div className="info-description">
                                <p>{modalContent.description}</p>
                            </div>
                        </div>

                        <button className="modal-close-btn" onClick={closeModal}>
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;