import { FC, useCallback, useMemo, useState } from "react"
import { Board, BoardActions } from "./Board"

export type TurnType = "◯" | "×"
export type MarkType = "◯" | "×" | null

export const Main: FC = () => {
  const [turn, setTurn] = useState<TurnType>("◯")
  const [marks, setMarks] = useState<MarkType[]>([null, null, null, null, null, null, null, null, null])

  const winner = useMemo<MarkType>(() => {
    if (marks.at(0) != null && marks.at(0) === marks.at(1) && marks.at(1) === marks.at(2)) {
      return marks.at(0)!
    }
    if (marks.at(3) != null && marks.at(3) === marks.at(4) && marks.at(4) === marks.at(5)) {
      return marks.at(3)!
    }
    if (marks.at(6) != null && marks.at(6) === marks.at(7) && marks.at(7) === marks.at(8)) {
      return marks.at(6)!
    }
    // 縦
    if (marks.at(0) != null && marks.at(0) === marks.at(3) && marks.at(3) === marks.at(6)) {
      return marks.at(0)!
    }
    if (marks.at(1) != null && marks.at(1) === marks.at(4) && marks.at(4) === marks.at(7)) {
      return marks.at(1)!
    }
    if (marks.at(2) != null && marks.at(2) === marks.at(5) && marks.at(5) === marks.at(8)) {
      return marks.at(2)!
    }
    // 斜め
    if (marks.at(0) != null && marks.at(0) === marks.at(4) && marks.at(4) === marks.at(8)) {
      return marks.at(0)!
    }
    if (marks.at(2) != null && marks.at(2) === marks.at(4) && marks.at(4) === marks.at(6)) {
      return marks.at(2)!
    }
    return null
  }, [marks])

  const actions: BoardActions = {
    onClickItem: useCallback(
      (index: number, mark: MarkType) => {
        if (winner != null) return
        if (marks[index] != null) return
        setMarks((prev) => {
          const newArray = [...prev]
          newArray[index] = mark
          return newArray
        })
        setTurn(turn === "◯" ? "×" : "◯")
      },
      [marks, turn, winner]
    ),
  }

  const onClickReset = () => {
    setMarks([null, null, null, null, null, null, null, null, null])
    setTurn("◯")
  }

  return (
    <>
      <p>{`勝者:${winner}`}</p>
      <p>{marks}</p>
      <p>{`${turn}のターンです`}</p>
      <Board turn={turn} actions={actions} board={marks} />
      <button onClick={onClickReset}>リセット</button>
    </>
  )
}
