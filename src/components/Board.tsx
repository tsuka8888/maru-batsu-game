import { FC, useMemo, useState } from "react"
import { boardStyles } from "./board.css"
import { MarkType, TurnType } from "./Main"

export interface BoardActions {
  onClickItem: (index: number, mark: MarkType) => void
}
export interface BoardProps {
  turn: TurnType
  actions: BoardActions
  board: MarkType[]
}

export const Board: FC<BoardProps> = ({ turn, actions, board }) => {
  return (
    <div className={boardStyles.container}>
      {board.map((item, index) => (
        <div className={boardStyles.item} onClick={() => actions.onClickItem(index, turn)} key={index}>
          {board.at(index)}
        </div>
      ))}
    </div>
  )
}
