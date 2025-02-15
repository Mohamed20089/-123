document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // جمع البيانات من النموذج
    const taskInput = document.getElementById('task-input').value;
    const priority = document.getElementById('priority-select').value;

    // إنشاء عنصر المهمة
    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput;

    // إضافة فئة حسب الأولوية
    taskItem.classList.add(`priority-${priority}`);

    // إضافة زر حذف
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => taskItem.remove());

    taskItem.appendChild(deleteButton);

    // إضافة المهمة إلى القائمة
    document.getElementById('task-list').appendChild(taskItem);

    // إعادة تعيين النموذج
    document.getElementById('task-form').reset();
});
