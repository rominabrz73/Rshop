import moment from 'moment';
import React from 'react'

export function dayofWeek(date: Date){
 return   moment(date).format('dddd'); 
}
