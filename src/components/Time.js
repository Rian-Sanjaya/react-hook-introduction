import React from 'react'
import moment from 'moment'

export default () => (
<h1>Time: {moment().format('h:mm:ss a')}</h1>
)