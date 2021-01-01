/* eslint-disable array-callback-return */

// @ts-nocheck
import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import _ from 'lodash'
import './index.css'

const board = {
  columns: [
    {
      id: 1,
      boardTitle: "Backlog",
      tasks: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content"
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content"
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      boardTitle: "Doing",
      tasks: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      boardTitle: "Q&A",
      tasks: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content"
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content"
        }
      ]
    },
    {
      id: 4,
      boardTitle: "Production",
      tasks: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content"
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content"
        }
      ]
    }
  ]
};


function Store () {
  const testData = board.columns

    const handleDragEnd = ({ destination, source }) => {
      if (!destination) return

      if (destination.index === source.index && destination.droppableId === source.droppableId) return

      const itemCopy = testData[source.index]
      testData.splice(source.index, 1)
      testData.splice(destination.index, 0, itemCopy)
    }

    return (
      <div id="store">
        <DragDropContext onDragEnd={ handleDragEnd }>
          <Droppable droppableId={"hold-page"} direction="horizontal">
            {(provided) => {
              return (
                <div
                  ref={ provided.innerRef }
                  { ...provided.droppableProps }
                  className="d-flex flex-row">
                    {_.map(testData, (el, i) => {
                      return (
                        <Draggable key={ el.id } index={ i } draggableId={ String(el.id) }>
                          {(provided) => {
                            return (
                              <div 
                                ref={ provided.innerRef }
                                { ...provided.draggableProps }
                                { ...provided.dragHandleProps }
                                key={ i }
                                className="column">
                                <div className='card card-contain mb-4'>
                                  <div className='card-body'>
                                    { el.boardTitle }
                                  </div>
                                </div>
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
        </DragDropContext>
    </div>
  )
}

export default Store