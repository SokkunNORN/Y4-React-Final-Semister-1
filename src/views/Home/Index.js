// @ts-nocheck
import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import _ from 'lodash'
import './index.css'
import lists from '../../mock.json'

function Home () {

    const testData = lists.data

    const handleDragEnd = ({ destination, source }) => {
        console.log(testData)
        console.log('Destination = ', destination)
        console.log('Source = ', source)
        if (!destination) return

        if (destination.index === source.index && destination.droppableId === source.droppableId) return

        const itemCopy = testData[source.droppableId].tasks[source.index]

        testData[source.droppableId].tasks.splice(source.index, 1)

        testData[destination.droppableId].tasks.splice(destination.index, 0, itemCopy)
        
    }

    return (
        <div id="home">
            <DragDropContext onDragEnd={ handleDragEnd }>
                {_.map(testData, (item, i) => {
                    return (
                        <div key={ i } className="column">
                            <h6>{ item.boardTitle }</h6>
                            <Droppable droppableId={ String(i) }>
                                {(provided) => {
                                    return (
                                        <div 
                                            ref={ provided.innerRef }
                                            { ...provided.droppableProps }
                                            className={"droppable-col"}
                                        >
                                            {item.tasks.map((el, index) => {
                                                return (
                                                    <Draggable key={ el.id } index={ index } draggableId={ String(el.id) }>
                                                        {(provided) => {
                                                            return ( 
                                                                <div
                                                                    className={"item"}
                                                                    ref={ provided.innerRef }
                                                                    { ...provided.draggableProps }
                                                                    { ...provided.dragHandleProps }
                                                                >
                                                                    { el.title }
                                                                </div>
                                                            )
                                                        }}
                                                    </Draggable>
                                                )
                                            })}
                                        </div>
                                    )
                                }}
                            </Droppable>
                        </div>
                    )
                })}
            </DragDropContext>
        </div>
    )
}

export default Home
