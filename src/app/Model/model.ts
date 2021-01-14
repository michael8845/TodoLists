export class Model
{
    user;
    items;

    constructor()
    {
        this.user="Michael";
        this.items=[
            {action:"Buy Flowers",done:false},
            {action:"Get Shoes",done:false},
            {action:"Collect Tickets",done:true},
            {action:"Do Workout",done:false},

        ]
    }
}
export class ToDoItem
{
    action;
    done;
    constructor(action,done)
{
    this.action = action;
    this.done = done;
}
}