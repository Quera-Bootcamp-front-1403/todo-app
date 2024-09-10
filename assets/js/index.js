let todos = [];
let completedTodos = [];

const addTodo = () => {
    todos.push({
        title: "",
        discrip: "",
        tag: "",
        edit: true,
        finished: false,
    })
    renderTodos();
};

const updateTodo = (index) => {
    const title = document.getElementById(`taskName-${index}`).value;
    const discrip = document.getElementById(`taskDescription-${index}`).value;
    let tag;
    if (!document.getElementById("chosenTag-high").classList.contains("hidden")) {
        tag = "بالا";
    } else if (!document.getElementById("chosenTag-mid").classList.contains("hidden")) {
        tag = "متوسط";
    } else {
        tag = "پایین";
    }
    todos[index] = { title, discrip, tag, edit: false, finished: false };
    if (todos[index].title === "") {
        todos.splice(index, 1);
    }

    closeForm();
    renderTodos();
}


document.getElementById("addTaskBtn").addEventListener("click", addTodo);

const renderTodos = () => {
    const unfinishedTasks = document.getElementById("unfinishedTasks");
    const finishedTasks = document.getElementById("finishedTasks");
    const completedTitle = document.getElementById("completed-title");
    const emptyTask = document.getElementById("emptyTask");
    const btnAdd = document.getElementById("btnContainer");
    const countTaskForDo = document.getElementById("tasksCount");
    const taskdoneCount = document.getElementById("taskdoneCount");

    unfinishedTasks.innerHTML = "";
    finishedTasks.innerHTML = "";
    btnAdd.classList.toggle("hidden", todos.length > 0)

    if (todos.length === 0) {
        countTaskForDo.innerHTML = "تسکی برای امروز نداری!";
    } else {
        countTaskForDo.innerHTML = `${todos.length} تسک را باید انجام دهید.`;
    }

    if (completedTodos.length === 0) {
        completedTitle.classList.add("hidden");
    } else {
        finishedTasks.classList.remove("hidden");
        completedTitle.classList.remove("hidden");
        taskdoneCount.innerHTML = `${completedTodos.length} تسک انجام شده است.`;
    }

    todos.length === 0 && completedTodos.length === 0 ? emptyTask.classList.remove("hidden") : emptyTask.classList.add("hidden");

    todos.forEach((todo, index) => {
        const div = document.createElement("div");
        div.className = "for-add mt-7 flex flex-col border border-dark-#E9E9E9c rounded-xl shadow-add-new-task mx-4 bg-white dark:bg-dark-bg dark:border-dark-#3D3D3Dc";
        if (todo.edit) {
            div.innerHTML = `
            <div class="pt-4">
                        <div class="px-4">
                            <input type="text" placeholder="نام تسک" id="taskName-${index}" value="${todo.title}"
                                class="block w-full mb-2 placeholder-#7D7D7Fc text-sm font-semibold leading-custom-21 p-1 md:text-base focus:ring-0 focus:outline-none md:font-bold dark:text-white dark:bg-dark-bg">
                            <textarea type="text" placeholder="توضیحات" id="taskDescription-${index}" value="${todo.discrip}"
                                class="block w-full placeholder-#AFAEB2c font-normal text-xs leading-custom-18 p-1 focus:ring-0 focus:outline-none md:text-sm md:font-semibold dark:text-dark-#83878Fc dark:bg-dark-bg"></textarea>
                        </div>
                        <div class="mt-6 pr-4 hidden" id="hight-low-mid-div" >
                            <button id="chosenTag-high"
                                class="hidden flex items-center gap-2 py-1 px-2 rounded-custom-4 bg-#FFE2DBc dark:bg-dark-#3D2327c">
                                <img id="closeTag" src="./assets/images/close.svg" alt="tag-icon1" width="20px"
                                    height="20px" class="dark:hidden">
                                <img id="closeTag" src="./assets/images/close-circle.svg" alt="tag-icon1" width="20px"
                                    height="20px" class="hidden dark:inline-block">
                                <span
                                    class="text-xs text-#text-red leading-custom-18 font-semibold md:text-sm">بالا</span>
                            </button>
                            <button id="chosenTag-mid"
                                class="hidden flex items-center gap-2 py-1 px-2 rounded-custom-4 bg-#FFEFD6c dark:bg-dark-#302F2Dc">
                                <img id="closeTag" src="./assets/images/close.svg" alt="tag-icon1" width="20px"
                                    height="20px" class="dark:hidden">
                                <img id="closeTag" src="./assets/images/close-circle.svg" alt="tag-icon1" width="20px"
                                    height="20px" class="hidden dark:inline-block">
                                <span
                                    class="text-xs text-text-orange leading-custom-18 font-semibold md:text-sm">متوسط</span>
                            </button>
                            <button id="chosenTag-low"
                                class="hidden flex items-center gap-2 py-1 px-2 rounded-custom-4 bg-#C3FFF1c dark:bg-dark-#233332c">
                                <img id="closeTag" src="./assets/images/close.svg" alt="tag-icon1" width="20px"
                                    height="20px" class="dark:hidden">
                                <img id="closeTag" src="./assets/images/close-circle.svg" alt="tag-icon1" width="20px"
                                    height="20px" class="hidden dark:inline-block">
                                <span
                                    class="text-xs text-text-green leading-custom-18 font-semibold md:text-sm">پایین</span>
                            </button>
                        </div>
                        <div class="mt-6 pr-4">
                            <button id="tagsBtn"
                                class="flex items-center gap-2 py-1 px-2 border rounded-custom-4 border-dark-#E9E9E9c dark:border-dark-#83878Fc">
                                <img src="./assets/images/tag-right.svg" alt="tag-icon1" class="" id="first-tag-btn">
                                <img src="./assets/images/tag-bottom.svg" alt="tag-icon2" class="disabled hidden" id="second-tag-btn">
                                <span
                                    class="text-xs text-#AFAEB2c leading-custom-18 font-semibold md:text-sm md:dark:text-white">تگ‌ها</span>
                            </button>
                        </div>
                        <div id="tags"
                            class="hidden flex border border-#EBEDEFc rounded-lg shadow-tags mt-6 mr-4 py-custom-10 gap-4 pr-custom-10 w-custom-214 dark:bg-dark-#0B192Dc dark:border-dark-#293242c">
                            <button id="low"
                                class="text-xs font-bold leading-custom-18 py-1 px-2 rounded-custom-4 text-text-green bg-#C3FFF1c dark:bg-dark-#233332c dark:text-dark-text-green">
                                پایین
                            </button>
                            <img src="./assets/images/Line.svg" alt="vertical-line" class="dark:border-dark-#293242c">
                            <button id="mid"
                                class="text-xs font-bold leading-custom-18 py-1 px-2 rounded-custom-4 text-text-orange bg-#FFEFD6c dark:bg-dark-#302F2Dc">
                                متوسط
                            </button>
                            <img src="./assets/images/Line.svg" alt="vertical-line" class="dark:border-dark-#293242c">
                            <button id="high"
                                class="text-xs font-bold leading-custom-18 py-1 px-2 rounded-custom-4 text-#text-red bg-#FFE2DBc dark:bg-dark-#3D2327c">
                                بالا
                            </button>
                        </div>
            </div>
            <hr class="for-add border border-#E9E9E9c mt-6 dark:border-dark-#3D3D3Dc">
                    <div class="for-add pb-custom-19 flex flex-row-reverse pt-4 pl-4 items-center">
                        <div class="text-white text-xs font-semibold leading-custom-18 md:text-sm dark:opacity-50">
                            <button id="createNewTaskBtn"
                                class="addTask py-custom-6 px-4 bg-#007BFFc opacity-50 rounded-md dark:bg-dark-#002247c">اضافه
                                کردن تسک</button>
                        </div>
                        <div id="close" class="pl-custom-6 cursor-pointer">
                            <img src="./assets/images/close-task.svg" alt="close-task"
                                class="rounded-md dark:hidden">
                            <img src="./assets/images/close-circle.svg" alt="close-task"
                                class=" p-custom-6 rounded-md bg-#F5F5F5c hidden dark:inline-block dark:bg-dark-#0C1B31c">
                        </div>
                    </div>
            `;
            div.querySelector("#close").addEventListener("click", () => closeForm(index))
            div.querySelector(`#taskName-${index}`).addEventListener("keyup", enableSaveBtn)
            div.querySelector(".addTask").addEventListener("click", () => updateTodo(index));
            div.querySelector("#tagsBtn").addEventListener("click", () => {
                if (document.getElementById("first-tag-btn").classList.contains("hidden") && !document.getElementById("second-tag-btn").classList.contains("hidden")) {
                    document.getElementById("first-tag-btn").classList.remove("hidden");
                    document.getElementById("second-tag-btn").classList.add("hidden");
                    document.getElementById("tags").classList.add("hidden");

                } else {
                    document.getElementById("first-tag-btn").classList.add("hidden");
                    document.getElementById("second-tag-btn").classList.remove("hidden");
                    document.getElementById("tags").classList.remove("hidden");
                }
            })
            div.querySelector("#low").addEventListener("click", () => {
                document.getElementById("first-tag-btn").classList.remove("hidden");
                document.getElementById("second-tag-btn").classList.add("hidden");
                document.getElementById("tags").classList.add("hidden");
                document.getElementById("hight-low-mid-div").classList.remove("hidden");
                document.getElementById("chosenTag-low").classList.remove("hidden");
                document.getElementById("chosenTag-high").classList.add("hidden");
                document.getElementById("chosenTag-mid").classList.add("hidden");
            })
            div.querySelector("#chosenTag-low").addEventListener("click", () => {
                document.getElementById("hight-low-mid-div").classList.add("hidden");
                document.getElementById("chosenTag-low").classList.add("hidden");
            })
            div.querySelector("#mid").addEventListener("click", () => {
                document.getElementById("first-tag-btn").classList.remove("hidden");
                document.getElementById("second-tag-btn").classList.add("hidden");
                document.getElementById("tags").classList.add("hidden");
                document.getElementById("hight-low-mid-div").classList.remove("hidden");
                document.getElementById("chosenTag-mid").classList.remove("hidden");
                document.getElementById("chosenTag-high").classList.add("hidden");
                document.getElementById("chosenTag-low").classList.add("hidden");
            })
            div.querySelector("#chosenTag-mid").addEventListener("click", () => {
                document.getElementById("hight-low-mid-div").classList.add("hidden");
                document.getElementById("chosenTag-mid").classList.add("hidden");
            })
            div.querySelector("#high").addEventListener("click", () => {
                document.getElementById("first-tag-btn").classList.remove("hidden");
                document.getElementById("second-tag-btn").classList.add("hidden");
                document.getElementById("tags").classList.add("hidden");
                document.getElementById("hight-low-mid-div").classList.remove("hidden");
                document.getElementById("chosenTag-high").classList.remove("hidden");
                document.getElementById("chosenTag-low").classList.add("hidden");
                document.getElementById("chosenTag-mid").classList.add("hidden");
            })
            div.querySelector("#chosenTag-high").addEventListener("click", () => {
                document.getElementById("hight-low-mid-div").classList.add("hidden");
                document.getElementById("chosenTag-high").classList.add("hidden");
            })
            unfinishedTasks.insertAdjacentElement("beforebegin", div);
        } else {
            div.className = "flex justify-between bg-white shadow-lg overflow-hidden mb-4 relative border rounded-xl dark:bg-dark-#091120c dark:border-0 min-h-20";
            div.innerHTML = "";
            div.innerHTML = `
                        <div class="flex items-center">
                            <div class="flex-shrink-0 ${todo.tag === "بالا" ? "bg-#text-red" : todo.tag === "متوسط" ? "bg-text-orange" : todo.tag === "پایین" ? "bg-text-green" : "bg-text-green"} w-1 h-16 rounded-l-lg"></div>
                            <div class="mr-4 absolute top-5">
                                <label class="flex items-center space-x-2">
                                    <input type="checkbox"
                                        class="form-checkbox bg-transparent w-5 h-5 rounded-[5px] border-gray-300 focus:ring-0 focus:ring-offset-0 focus:outline-none">
                                </label>
                            </div>
                            <div class="py-4 mr-10 flex-grow">
                                <div class="flex">
                                    <h1
                                        class="md:font-bold font-semibold md:text-base text-sm text-right -text--secondary-gray dark:text-white mb-2">
                                        ${todo.title}</h1>
                                    <div class="mr-3">
                                        <span id=""
                                            class="text-custom-10 font-semibold leading-4 py-custom-2 px-2 rounded-custom-4 ${todo.tag === "بالا" ? "text-#text-red" : todo.tag === "متوسط" ? "text-text-orange" : "text-text-green"} ${todo.tag === "بالا" ? "bg-#FFE2DBc" : todo.tag === "متوسط" ? "bg-#FFEFD6c" : "bg-#C3FFF1c"} dark:${todo.tag === "بالا" ? "bg-dark-#3D2327c" : todo.tag === "متوسط" ? "bg-dark-#302F2Dc" : "bg-dark-#233332c"} dark:${todo.tag === "پایین" ? "text-dark-text-green" : todo.tag === "متوسط" ? "text-text-orange" : "text-#text-red"}">
                                            ${todo.tag}
                                        </span>
                                    </div>
                                </div>
                                <p
                                    class="font-normal md:text-sm text-xs text-right md:-text--primary-grays -text--thirdry-gray dark:text-dark-#848890c">
                                    ${todo.discrip}</p>
                            </div>
                        </div>
                        <div class="relative">
                            <img src="./assets/images/more.svg" alt="" class="more dark:hidden block pl-6 cursor-pointer pt-4 md:pt-4">
                            <img src="./assets/images/more-dark.svg" alt="" class="more hidden dark:block pl-6 cursor-pointer pt-4 md:pt-4">
                            <div class="edit-trash hidden flex absolute left-12 gap-custom-10 md:w-custom-78 md:h-custom-34 rounded-lg md:border p-custom-5 md:bottom-1 md:left-5 border-#EBEDEFc shadow-eidt-trash">
                                <img src="./assets/images/trash-light.svg" alt="" class="trash md:w-6 md:h-6 cursor-pointer">
                                <div class="flex-shrink-0 border bg-#EBEDEFc "></div>
                                <img src="./assets/images/edit-light.svg" alt="" class="md:w-6 md:h-6 cursor-pointer">
                            </div>
                        </div>
            `
            btnAdd.classList.remove("hidden");
            div.querySelector(".form-checkbox").addEventListener("click", () => toggleTaskCompletion(index));
            unfinishedTasks.appendChild(div);
            div.querySelector(".more").addEventListener("click", () => {
                div.querySelector(".edit-trash").classList.toggle("hidden");
            })
            div.querySelector(".trash").addEventListener("click", () => {
                todos.splice(index, 1);
                renderTodos();
            })
        }
    });
    completedTodos.forEach((todo, index) => {
        const div = document.createElement("div");
        let bgColorClass;
        switch (todo.tag) {
            case "بالا":
                bgColorClass = "bg-#text-red";
                break;
            case "متوسط":
                bgColorClass = "bg-text-orange";
                break;
            case "پایین":
                bgColorClass = "bg-text-green";
            default:
                bgColorClass = "bg-text-green";
                break;
        }

        div.className = "flex justify-between items-center bg-white shadow-lg border rounded-lg overflow-hidden relative dark:bg-dark-#091120c dark:border-0"
        div.innerHTML = ` <div class="flex items-center">
                                <div class="flex-shrink-0 ${bgColorClass} w-1 h-custom-42 md:h-12 rounded-l-lg"></div>
                                <div class="mr-4 absolute top-5">
                                    <label class="flex items-center space-x-2">
                                        <input type="checkbox" checked
                                            class="form-checkbox bg-transparent w-5 h-5 rounded-[5px] border-gray-300 focus:ring-0 focus:ring-offset-0 focus:outline-none">
                                    </label>
                                </div>
                                <div class="py-4 mr-10 flex-grow">
                                    <div class="flex">
                                        <h1
                                            class="md:font-bold font-semibold md:text-base text-sm text-right line-through -text--secondary-gray dark:text-white mb-2">
                                           ${todo.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src="./assets/images/more.svg" alt="" class="dark:hidden block pl-6">
                                <img src="./assets/images/more-dark.svg" alt="" class="hidden dark:block pl-6">
                            </div>`;
        div.querySelector(".form-checkbox").addEventListener("click", () => toggleTaskCompletion(index, true));
        finishedTasks.appendChild(div);
    });
};
function enableSaveBtn() {
    if (this.value !== "") {
        document.querySelector('.addTask').classList.remove("opacity-50")
    }
    else {
        document.querySelector('.addTask').classList.add("opacity-50")
    }
}
function closeForm(index = -1) {
    if (index > -1) {
        if (todos[index].title === "") {
            todos.splice(index, 1);
        }
        else {
            todos[index].edit = false;
        }
    }
    document.querySelector(".for-add").remove()
    renderTodos();
}
const toggleTaskCompletion = (index, finished = false) => {
    if (finished) {
        const completedTodo = completedTodos.splice(index, 1)[0];
        completedTodo.finished = false;
        todos.push(completedTodo);
    } else {
        const completedTodo = todos.splice(index, 1)[0];
        completedTodo.finished = true;
        completedTodos.push(completedTodo);
    }
    renderTodos();

};