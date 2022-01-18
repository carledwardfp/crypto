import { Sparklines as ReactSparklines, SparklinesLine } from 'react-sparklines'

const Sparklines = ({ change, data }: { change: string; data: string[] }) => {
  const mappedData = data.map((data) => parseFloat(data))
  const color = change.includes('-') ? 'red' : 'green'

  return (
    <ReactSparklines data={mappedData}>
      <SparklinesLine color={color} />
    </ReactSparklines>
  )
}

export default Sparklines
