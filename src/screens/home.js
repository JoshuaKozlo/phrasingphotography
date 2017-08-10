import _ from 'lodash';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import LoginIcon from 'grommet/components/icons/base/Login';




import { gallery } from '../components/Gallery';



class Home extends Component {

	state = {
		lightboxIsOpen: false,
		currentImage: 3
	}

	openLightbox(index) {
		this.setState({
			currentImage: index,
			lightboxIsOpen: true
		});
	}

	closeLightbox() {
		this.setState({
			lightboxIsOpen: false
		});
	}

	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	}

	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	}

	gotoImage(index) {
		this.setState({
			currentImage: index
		})
	}

	handleClickImage() {
		if (this.state.currentImage === this.props.images.length - 1) return;

		this.gotoNext()
	}

	renderGallery() {
		return _.map(gallery,(img, index) => {
			return (
				<Box margin="small" key={index} onClick={() => this.openLightbox(index)}>
					<Image src={img.src} size="small"/>
				</Box>
			);
		});
	}

	render() {
		return (
			<div>
				<Headline align="center" size="small">Carolina Real Estate Photography</Headline>
				<Box direction="row" wrap justify="center">
					<Card thumbnail={gallery[1].src}
						heading="Exterior Photography"
						label="Ground / Aerial Drone"
						margin="small"
					 />
					<Card thumbnail={gallery[0].src}
						heading="Interior Photography"
						focusable={false}
						label="The Whole Home"
						margin="small"
						textSize="small"
					 />
					<Card thumbnail={gallery[2].src}
						heading="Foor plan"
						label="All Floors"
						margin="small"
					 />
					 <Card thumbnail={gallery[3].src}
						heading="Drone Videography"
						label="Neighborhood Shot"
						margin="small"
					 />
				</Box>
				<Box align="center" margin="medium">
					<iframe title="drone" src="https://player.vimeo.com/video/226403307" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
				</Box>
				<Box colorIndex="light-2">
					<Headline align="center" size="small">A Complete Real Estate Marketing Package</Headline>
				
				<Box direction="row" wrap justify="center" responsive={false}>
					{this.renderGallery()}
				</Box>
				</Box>
				<Box full="horizontal" pad="medium" colorIndex="brand">
					<Headline align="center" size="small" strong>Email: phrasing.photo@gmail.com</Headline>
					<Headline align="center" size="small" strong>Call: 910.225.4337</Headline>
				</Box>
				<Lightbox 
					images={gallery}
					currentImage={this.state.currentImage}
					isOpen={this.state.lightboxIsOpen}
					onClose={this.closeLightbox.bind(this)}
					onClickNext={this.gotoNext.bind(this)}
					onClickPrev={this.gotoPrevious.bind(this)}
				/>
			</div>
		);
	}
}

export default Home;
