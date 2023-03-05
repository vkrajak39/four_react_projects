import React, { useState, useEffect } from "react";
import "./style.css";

const Todo = () => {
    //calling local storage function
    const localStorageListItems = () => {
        const localItems = localStorage.getItem("todoListItems");

        //not empty
        if (localItems) {
            //JSON.parse() converts string into abjects just reverse of
            // JSON.stringify()
            return JSON.parse(localItems);
        }

        //empty array
        else {
            return [];
        }
    };

    const [inputData, setInputData] = useState("");
    const [listItems, setListItems] = useState(localStorageListItems());
    const [editItemId, setEditItemId] = useState("");
    const [editItemToggle, setEditItemToggle] = useState(false);
    //const [isDoneToggle, setIsDoneToggle] = useState(false);
    

    // adding data to local storage
    //local storage.setItems("key " ,"value(in string format)")
    //used to only et items to local storage whenever there is
    // any change in listItems array

    useEffect(() => {
        localStorage.setItem("todoListItems", JSON.stringify(listItems));
    }, [listItems]);

    //function to edit list items
    const editItem = (index) => {
        const todo_edit_item = listItems.find((curElem) => {
            return curElem.id === index;
        });

        setInputData(todo_edit_item.value);
        setEditItemId(index);
        setEditItemToggle(true);
    };

    //function to remove all elements
    const removeAllItems = () => {
        setListItems([]);
    };

    const addItem = () => {
        if (inputData === "") {
            alert("PLaese input some text");
        }

        //condition for edit functionality
        else if (inputData !== "" && editItemToggle === true) {
            setListItems(
                listItems.map((curElem) => {
                    if (curElem.id === editItemId) {
                        //if curElem.id matches with edit element id then
                        // reurn the curElem and update its value to inputData
                        // if does not match return curElem as it is
                        // console.log({...curElem, value : inputData});
                        return { ...curElem, value: inputData };
                    } else {
                        return curElem;
                    }
                })
            );

            setInputData("");
            setEditItemId(null);
            setEditItemToggle(false);
        } else {
            // we are creating an object for every element having unique id and
            // value

            const listItemData = {
                id: new Date().getTime().toString(),
                value: inputData,
                textDecoration: "none",
            };
            setListItems([...listItems, listItemData]);
            setInputData("");
        }
    };

    // function to line through items which are done
    const isDone = (index) => {
        setListItems(
            listItems.map((curElem) => {
                if (curElem.id === index) {
                    //if curElem.id matches with edit element id then
                    // reurn the curElem and update its value to inputData
                    // if does not match return curElem as it is
                    // console.log({...curElem, value : inputData});
                    if (curElem.textDecoration === "none") {
                        return { ...curElem, textDecoration: "line-through" };
                    } else {
                        return { ...curElem, textDecoration: "none" };
                    }
                } else {
                    return curElem;
                }
            })
        );

        // if(isDoneToggle === false)
        // {
        //     setIsDoneToggle(true);
        // }
        // else{
        //     setIsDoneToggle(false);
        // }
    };

    //function to delete items
    const deleteItem = (elemId) => {
        //storing the updated list in updateList
        const updatedList = listItems.filter((curElem) => {
            //returning only those elements which dose not matches to caller
            //element id
            return curElem.id !== elemId;
        });

        setListItems(updatedList);
    };

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo_Logo" />
                        <figcaption>Add your list here ✌️</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍️ Add Item"
                            className="form-control"
                            value={inputData}
                            onChange={(event) => {
                                setInputData(event.target.value);
                            }}
                        />

                        {/* conditional rendering of plus and edit item
                        based on the value of editItemToggle */}

                        {editItemToggle ? (
                            <i className="far fa-edit add-btn" onClick={addItem}></i>
                        ) : (
                            <i className="fa fa-plus add-btn" onClick={addItem}></i>
                        )}
                    </div>

                    {/*show items of the list  */}
                    <div className="showItems">
                        {listItems.map((curElem) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3
                                        // implementing linethrough when clicked
                                        onClick={() => {
                                            isDone(curElem.id);
                                        }}
                                        style={{ textDecoration: curElem.textDecoration }}
                                    >
                                        {curElem.value}
                                    </h3>
                                    <div className="todo-btn">
                                        <i
                                            className="far fa-edit add-btn"
                                            onClick={() => {
                                                editItem(curElem.id);
                                            }}
                                        ></i>

                                        <i
                                            className="far fa-trash-alt add-btn"
                                            onClick={() => {
                                                deleteItem(curElem.id);
                                            }}
                                        ></i>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* remove button  */}
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={removeAllItems}
                        >
                            <span className="">Check List</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
