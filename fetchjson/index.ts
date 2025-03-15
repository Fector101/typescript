import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface TODO {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((res) => {
    const todo = res.data as TODO;
    const { id, title, completed } = todo;
    console.log(`
        The TODO with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
        `);
});
