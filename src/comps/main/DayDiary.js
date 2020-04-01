import React from 'react'

function DayDiary({ diary }) {
  return (
    <div class="card">
      <div class="card-header">
        <h5 class="mb-0">
          <a data-toggle="collapse" data-parent="#accordianId" href={'#id_' + diary._id}>
            {new Date(Date.parse(diary.timestamp)).toDateString()}
          </a>
        </h5>
      </div>
      <div id={'id_' + diary._id} class="collapse in" >
        <div class="card-body">
          <table className='table table-sm table-bordered'>
            <tbody>
              <tr>
                <td>timestamp</td>
                <td>{diary.timestamp}</td>
              </tr>
              <tr>
                <td>blockhash</td>
                <td><a href={'https://ropsten.etherscan.io/block/' + diary.blockNumber} target='_blank'>{diary.blockHash}</a></td>
              </tr>
              <tr>
                <td>txhash</td>
                <td><a href={'https://ropsten.etherscan.io/tx/' + diary.transactionHash} target='_blank'>{diary.transactionHash}</a></td>
              </tr>
              <tr>
                <td>cid</td>
                <td><a href={'https://ipfs.io/ipfs/' + diary.cid} target='_blank'>{diary.cid}</a>
                </td>
              </tr>
              <tr>
                <td>content</td>
                <td>{diary.content}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DayDiary
