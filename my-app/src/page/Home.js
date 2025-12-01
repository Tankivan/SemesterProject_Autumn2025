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

const Home = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const getObjectInfo = (id) => {
        const infoMap = {
            // Деревья(ель)
            'img1': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево семейства сосновых.' },
            'img2': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево семейства сосновых.' },
            'img3': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево семейства сосновых.' },
            'img4': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево семейства сосновых.' },
            'img5': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево семейства сосновых.' },
            'img6': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево семейства сосновых.' },
            'img7': { name: 'Ель', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево семейства сосновых.' },

            // Растение(таволга)
            'img8': { name: 'Таволга', type: 'растение', family: 'Розоцветные', description: 'Травянистое растение семейства розоцветных.' },

            // Деревья(клен)
            'img9': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: 'Лиственное дерево с характерными резными листьями.' },
            'img10': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: 'Лиственное дерево с характерными резными листьями.' },
            'img11': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: 'Лиственное дерево с характерными резными листьями.' },
            'img12': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: 'Лиственное дерево с характерными резными листьями.' },
            'img13': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: 'Лиственное дерево с характерными резными листьями.' },
            'img14': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: 'Лиственное дерево с характерными резными листьями.' },
            'img15': { name: 'Клен', type: 'дерево', family: 'Кленовые', description: 'Лиственное дерево с характерными резными листьями.' },

            // Растение(кровохлебка)
            'img16': { name: 'Кровохлебка', type: 'растение', family: 'Розоцветные', description: 'Лекарственное растение с кровоостанавливающими свойствами.' },

            // Растение(мать-и-мачеха)
            'img17': { name: 'Мать-и-мачеха', type: 'растение', family: 'Астровые', description: 'Раннецветущее лекарственное растение.' },

            // Животные(лисица)
            'img18': { name: 'Лисица', type: 'животное', family: 'Псовые', description: 'Хищное млекопитающее семейства псовых.' },

            // Растение(калина)
            'img19': { name: 'Калина', type: 'растение', family: 'Адоксовые', description: 'Кустарник с полезными ягодами.' },

            // Деревья(осина)
            'img20': { name: 'Осина', type: 'дерево', family: 'Ивовые', description: 'Лиственное дерево семейства ивовых.' },
            'img21': { name: 'Осина', type: 'дерево', family: 'Ивовые', description: 'Лиственное дерево семейства ивовых.' },
            'img22': { name: 'Осина', type: 'дерево', family: 'Ивовые', description: 'Лиственное дерево семейства ивовых.' },

            // Животные(лось)
            'img23': { name: 'Лось', type: 'животное', family: 'Оленевые', description: 'Крупное парнокопытное млекопитающее.' },

            // Деревья(сосна)
            'img24': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево.' },
            'img25': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево.' },
            'img26': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево.' },
            'img27': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево.' },
            'img28': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево.' },
            'img29': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево.' },
            'img30': { name: 'Сосна', type: 'дерево', family: 'Сосновые', description: 'Хвойное вечнозеленое дерево.' },

            // Растение(черемуха)
            'img31': { name: 'Черемуха', type: 'растение', family: 'Розоцветные', description: 'Дерево или кустарник с ароматными цветами.' },

            // Деревья(дуб)
            'img32': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: 'Мощное лиственное дерево-долгожитель.' },
            'img33': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: 'Мощное лиственное дерево-долгожитель.' },
            'img34': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: 'Мощное лиственное дерево-долгожитель.' },
            'img35': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: 'Мощное лиственное дерево-долгожитель.' },
            'img36': { name: 'Дуб', type: 'дерево', family: 'Буковые', description: 'Мощное лиственное дерево-долгожитель.' },

            // Деревья(береза)
            'img37': { name: 'Береза', type: 'дерево', family: 'Березовые', description: 'Лиственное дерево с белой корой.' },
            'img38': { name: 'Береза', type: 'дерево', family: 'Березовые', description: 'Лиственное дерево с белой корой.' },
            'img39': { name: 'Береза', type: 'дерево', family: 'Березовые', description: 'Лиственное дерево с белой корой.' },
            'img40': { name: 'Береза', type: 'дерево', family: 'Березовые', description: 'Лиственное дерево с белой корой.' },
            'img41': { name: 'Береза', type: 'дерево', family: 'Березовые', description: 'Лиственное дерево с белой корой.' },

            // Деревья(тополь)
            'img42': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: 'Быстрорастущее лиственное дерево.' },
            'img43': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: 'Быстрорастущее лиственное дерево.' },
            'img44': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: 'Быстрорастущее лиственное дерево.' },
            'img45': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: 'Быстрорастущее лиственное дерево.' },
            'img46': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: 'Быстрорастущее лиственное дерево.' },
            'img47': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: 'Быстрорастущее лиственное дерево.' },
            'img48': { name: 'Тополь', type: 'дерево', family: 'Ивовые', description: 'Быстрорастущее лиственное дерево.' },

            // Деревья(кедр)
            'img49': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: 'Крупное хвойное дерево с ценной древесиной.' },
            'img50': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: 'Крупное хвойное дерево с ценной древесиной.' },
            'img51': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: 'Крупное хвойное дерево с ценной древесиной.' },
            'img52': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: 'Крупное хвойное дерево с ценной древесиной.' },
            'img53': { name: 'Кедр', type: 'дерево', family: 'Сосновые', description: 'Крупное хвойное дерево с ценной древесиной.' },

            // Деревья(пихта)
            'img54': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: 'Хвойное дерево с мягкой хвоей.' },
            'img55': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: 'Хвойное дерево с мягкой хвоей.' },
            'img56': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: 'Хвойное дерево с мягкой хвоей.' },
            'img57': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: 'Хвойное дерево с мягкой хвоей.' },
            'img58': { name: 'Пихта', type: 'дерево', family: 'Сосновые', description: 'Хвойное дерево с мягкой хвоей.' },

            // Деревья(липа)
            'img59': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: 'Лиственное дерево с ароматными цветами.' },
            'img60': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: 'Лиственное дерево с ароматными цветами.' },
            'img61': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: 'Лиственное дерево с ароматными цветами.' },
            'img62': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: 'Лиственное дерево с ароматными цветами.' },
            'img63': { name: 'Липа', type: 'дерево', family: 'Мальвовые', description: 'Лиственное дерево с ароматными цветами.' },

            // Растение(бодяк)
            'img64': { name: 'Бодяк', type: 'растение', family: 'Астровые', description: 'Сорное растение семейства астровых.' },

            // Растение(борщевик)
            'img65': { name: 'Борщевик', type: 'растение', family: 'Зонтичные', description: 'Крупное растение, может вызывать ожоги.' },

            // Растение(клевер)
            'img66': { name: 'Клевер', type: 'растение', family: 'Бобовые', description: 'Травянистое растение с тройчатыми листьями.' },

            // Растение(полынь)
            'img67': { name: 'Полынь', type: 'растение', family: 'Астровые', description: 'Ароматное растение с горьким вкусом.' },

            // Растение(подорожник)
            'img68': { name: 'Подорожник', type: 'растение', family: 'Подорожниковые', description: 'Лекарственное растение с широкими листьями.' },

            // Животные(бурундук)
            'img69': { name: 'Бурундук', type: 'животное', family: 'Беличьи', description: 'Мелкий грызун с полосками на спине.' },

            // Животные(бурый медведь)
            'img70': { name: 'Бурый медведь', type: 'животное', family: 'Медвежьи', description: 'Крупное хищное млекопитающее.' },

            // Животные(соловей)
            'img71': { name: 'Соловей', type: 'животное', family: 'Мухоловковые', description: 'Певчая птица с красивым голосом.' },

            // Животные(дятел)
            'img72': { name: 'Дятел', type: 'животное', family: 'Дятловые', description: 'Птица, долбящая деревья в поисках насекомых.' },

            // Животные(соболь)
            'img73': { name: 'Соболь', type: 'животное', family: 'Куньи', description: 'Хищное млекопитающее с ценным мехом.' },

            // Животные(бобр)
            'img74': { name: 'Бобр', type: 'животное', family: 'Бобровые', description: 'Крупный грызун, строитель плотин.' },

            // Животные(синица)
            'img75': { name: 'Синица', type: 'животное', family: 'Синицевые', description: 'Мелкая певчая птица.' },
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
        setModalContent(info);
        setShowModal(true);
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
                    <div className="modal-right" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-category">{modalContent.type}</h2>
                        </div>

                        <div className="modal-body">
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