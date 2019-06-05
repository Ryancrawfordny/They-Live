import React, { PureComponent } from 'react';

export default class SightingsInfo extends PureComponent {

    render() {
        const { info } = this.props

        
        const SightingsReport = `${this.props.info.report}`
        const SightingsInfo= `${this.props.info.info}`
        
        return (
            <ul>
            <div>
               <li> <span>Report: {SightingsReport}</span> </li>
               <li> <span>Info: {SightingsInfo}</span> </li>
               

                
            </div>
            </ul>
    
        )
    }

}