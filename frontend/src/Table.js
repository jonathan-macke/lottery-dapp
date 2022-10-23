
const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    
    const rows = props.characters.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
          </tr>
        )
      })
    
    return (
      <tbody>
            {rows}
      </tbody>
    )
  }




function Table(props) {
    const { characters } = props
    return (
        <table>
            <TableHeader />
            <TableBody characters={characters}/>
        </table>
        );

}

export default Table