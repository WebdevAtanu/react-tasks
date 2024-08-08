import React from 'react'

function Showtab({propdata}) {
  return (
    <div>
      <table>
      <caption>Selected Data</caption>
        {
            propdata.map(item=>{
                return(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.ingredients}</td>
                        <td>{item.instructions.join(', ')}</td>
                        <td><img src={item.image} alt="" style={{width:'100%'}} /></td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Showtab
