import { Component } from "react";
import CardComponent from './CardComponent';
import ChartComponent from './ChartComponent';
import UserComponent from './UserComponent';
import HeadingComponent from './HeadingComponent';
export default class HomeComponent extends Component{
    render(){
        return <div>
            <div class="container-fluid px-4">
              <HeadingComponent />
              <div>
                <CardComponent />
              </div>
              <ChartComponent /> 
              <UserComponent />
            </div>
        </div>
    }
}