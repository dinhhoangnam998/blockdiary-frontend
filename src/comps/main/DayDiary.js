import React from 'react'

function DayDiary({ diary }) {
  return (
    <div class="card">
      <div class="card-header">
        <h5 class="mb-0">
          <a data-toggle="collapse" data-parent="#accordianId" href={'#id_' + diary._id}>
            {!diary.status ?
              <div>
                <span className='spinner-grow spinner-grow-sm text-primary'></span>
                <span className='spinner-grow spinner-grow-sm text-success'></span>
                <span className='spinner-grow spinner-grow-sm text-warning'></span>
                <span className='spinner-grow spinner-grow-sm text-danger'></span>
              </div> :
              new Date(Date.parse(diary.timestamp)).toDateString()
            }

          </a>
        </h5>
      </div>
      <div id={'id_' + diary._id} class="collapse in" >
        <div class="card-body">
          <table className='table table-sm table-bordered'>
            <tbody>
              <tr>
                <td>timestamp</td>
                <td>
                  {!diary.status ?
                    <span className='spinner-border spinner-border-sm text-primary'></span> :
                    diary.timestamp
                  }
                </td>
              </tr>
              <tr>
                <td>blockhash</td>
                <td>
                  {!diary.status ?
                    <span className='spinner-border spinner-border-sm text-success'></span> :
                    <a href={'https://ropsten.etherscan.io/block/' + diary.blockNumber} target='_blank'>{diary.blockHash}</a>
                  }
                </td>
              </tr>
              <tr>
                <td>txhash</td>
                <td>
                  {!diary.status ?
                    <span className='spinner-border spinner-border-sm text-warning'></span> :
                    <a href={'https://ropsten.etherscan.io/tx/' + diary.transactionHash} target='_blank'>{diary.transactionHash}</a>
                  }
                </td>
              </tr>
              <tr>
                <td>cid</td>
                <td>
                  {!diary.status ?
                    <span className='spinner-border spinner-border-sm text-danger'></span> :
                    <a href={'https://ipfs.io/ipfs/' + diary.cid} target='_blank'>{diary.cid}</a>
                  }
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
