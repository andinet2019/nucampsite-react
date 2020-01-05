import React,{Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    
    renderCampsite(campsite){
return(<div className="col-md-5 m-5">
    <Card>
                    <CardImg top src={this.props.campsite.image} alt={this.props.campsite.name} />
                    <CardBody>
                        <CardTitle>{this.props.campsite.name}</CardTitle>
                        <CardText>{this.props.campsite.description}</CardText>
                    </CardBody>
                </Card>
               
    
    </div>)
    
}



    render(){
        if(this.props.campsite){
        return(<div className="row">{this.renderCampsite()}</div>);

        }
        return <div/>;

    }
}

export default CampsiteInfo;