// Функция для изменения цвета фона
function changeBackgroundColor() {
    const changeColorBtn = document.getElementById('changeColorBtn');
    const body = document.body;
    
    // Массив цветовых схем
    const colors = [
        'linear-gradient(135deg, #c3cdfcff 0%, #c8a3ecff 100%)',
        'linear-gradient(135deg, #f6e1f8ff 0%, #f37c8cff 100%)',
        'linear-gradient(135deg, #bddbf5ff 0%, #6ff0f7ff 100%)',
        'linear-gradient(135deg, #d1f5ddff 0%, #76ebd5ff 100%)'
    ];
    
    let currentColor = 0;
    
    changeColorBtn.addEventListener('click', function() {
        currentColor = (currentColor + 1) % colors.length;
        body.style.background = colors[currentColor];
        console.log('Цвет изменен!');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    changeBackgroundColor(); // Вызываем нашу функцию
});

// Функция для работы со счетчиком
function createCounter() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    let count = 0;
    
    // Функция обновления счетчика
    function updateCounter() {
        counterElement.textContent = count;
    }
    
    // Увеличение счетчика
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    // Уменьшение счетчика
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    // Сброс счетчика
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
}

// Функция для обработки формы
function handleForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Предотвращаем стандартную отправку формы
        
        // Получаем данные формы
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Показываем сообщение
        alert('Спасибо, ' + name + '! Ваше сообщение отправлено.');
        
        // Очищаем форму
        contactForm.reset();
    });
}
// Функция для добавления навыков
function addSkills() {
    const addSkillBtn = document.getElementById('addSkillBtn');
    const skillsList = document.getElementById('skillsList');
    
    const newSkills = [
        'React',
        'Node.js',
        'Python',
        'Git'
    ];
    
    let skillIndex = 0;
    
    addSkillBtn.addEventListener('click', function() {
        if (skillIndex < newSkills.length) {
            const newSkill = document.createElement('li');
            newSkill.textContent = newSkills[skillIndex];
            skillsList.appendChild(newSkill);
            skillIndex++;
        } else {
            addSkillBtn.textContent = 'Все навыки добавлены!';
            addSkillBtn.disabled = true;
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    changeBackgroundColor();
    createCounter();
    handleForm();
    addSkills();
    showTime();
});
addSkillBtn.addEventListener('click', function() {
    if (skillIndex < newSkills.length) {
        const newSkill = document.createElement('li');
        newSkill.textContent = newSkills[skillIndex];
        newSkill.className = 'new-item'; // Добавляем класс для анимации
        skillsList.appendChild(newSkill);
        skillIndex++;
    }
});
// Функция для показа текущего времени
function showTime() {
    const timeElement = document.createElement('div');
    timeElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(226, 194, 255, 0.8);
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-family: monospace;
    `;
    document.body.appendChild(timeElement);
    
    function updateTime() {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString();
    }
    
    updateTime();
    setInterval(updateTime, 1000);
}
