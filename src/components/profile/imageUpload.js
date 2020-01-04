import React from 'react';
import PropTypes from "prop-types";

export class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    // _handleSubmit(e) {
    //     e.preventDefault();
    //     console.log('handle uploading-', this.state.file);
    //     this.props.onChangeImage(this.state.file);
    // }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.currentImage !== prevState.imagePreviewUrl) {
            return ({ imagePreviewUrl: nextProps.currentImage }) // <- this is setState equivalent
        }
    }

    _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file,e)
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            }, () => this.props.onChangeImage(reader.result));
        }
        reader.readAsDataURL(file)
    }

    onClickUpload = () => {
        document.getElementById("file-upload").click();
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<div ><img alt="imgPreview" src={imagePreviewUrl} className="imgPreview" style={{ height: 100, width: 100 ,resize: 'both',borderRadius:50}}/></div>);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <form
                // onSubmit={(e) => this._handleSubmit(e)}
                >
                    <input className="fileInput" style={{ display: "none" }}
                        type="file" id="file-upload"
                        onChange={(e) => this._handleImageChange(e)} />
                </form>
                <div className="imgPreview" onClick={this.onClickUpload}>
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

ImageUpload.propTypes = {
    currentImage: PropTypes.string,
    onChangeImage: PropTypes.func.isRequired
};



