// @ts-nocheck
import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import _ from 'lodash'
import './index.css'
import lists from '../../mock.json'
import ListDropdown from '../../components/listDropdown'
import Dashboard from '../../layouts/Dashboard'

function Home () {

    const listBoards = lists.data

    const handleDragEnd = ({ destination, source }) => {
        if (!destination) return

        if (destination.index === source.index && destination.droppableId === source.droppableId) return

        const itemCopy = listBoards[source.droppableId].tasks[source.index]

        listBoards[source.droppableId].tasks.splice(source.index, 1)

        listBoards[destination.droppableId].tasks.splice(destination.index, 0, itemCopy)
    }

    return (
        <Dashboard>
            <div id="home">
                <DragDropContext onDragEnd={ handleDragEnd }>
                    <div className="d-flex flex-row">
                        {_.map(listBoards, (item, i) => {
                            return (
                                <div key={ i } className="column">
                                    <div className='card card-contain mb-4'>
                                        <div className='card-body'>
                                            <button className="float-right btn btn-more"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fa fa-ellipsis-h"></i>
                                            </button>
                                            <ListDropdown lists={ ["Add Task", "Edit Title", "Remove"] } isHasLastBorder={ true }/>

                                            <h6>{ item.boardTitle }</h6>

                                                <Droppable droppableId={ String(i) }>
                                                {(provided) => {
                                                    return (     
                                                        <ul 
                                                            ref={ provided.innerRef }
                                                            { ...provided.droppableProps }
                                                            className="list-group">
                                                            {item.tasks.map((el, index) => {
                                                                return (
                                                                    <Draggable key={ el.id } index={ index } draggableId={ String(el.id) }>
                                                                        {(provided) => {
                                                                            return ( 
                                                                                <li
                                                                                    className={"list-group-item"}
                                                                                    ref={ provided.innerRef }
                                                                                    { ...provided.draggableProps }
                                                                                    { ...provided.dragHandleProps }
                                                                                >
                                                                                    <button className="float-right btn btn-edit" 
                                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                        <i className="fa fa-pencil"></i>
                                                                                    </button>
                                                                                    <ListDropdown lists={ ["Edit", "Move To", "Remove"] } isHasLastBorder={ true }/>

                                                                                    { el.title }
                                                                                </li>
                                                                            )
                                                                        }}
                                                                    </Draggable>
                                                                )
                                                            })}
                                                        </ul>
                                                    )
                                                }}
                                            </Droppable>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="column">
                            <button className="btn btn-add-board mr-4">
                                <i className="fa fa-plus-square mr-2"></i>
                                Add another list
                            </button>
                        </div>
                    </div>
                </DragDropContext>
            </div>
        </Dashboard>
    )
}

export default Home
