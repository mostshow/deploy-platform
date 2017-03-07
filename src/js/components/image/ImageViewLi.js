
import React, {Component , ProTypes} from 'react'
import {Input, Button, Row, Col, message} from 'antd'
import CopyToClipboard from 'react-copy-to-clipboard'

export default class ImageViewLi extends React.Component {

    onCopy(){
        message.success('复制成功！')
    }
    render() {
        let { fileList, handleDel } = this.props
        return (
            <div>

                {fileList.length > 0 ?
                <div>
                    <ul className="list_img">
                        {fileList.map((file) =>
                        <li key={file.key}>
                            <span className="deleteImg" key={file.key} onClick={handleDel.bind(this,file.key,file.url)}>x</span>
                            <a target='_blank' href={file.url} >
                                <img width="160" height='160' src={file.url}/>
                            </a>
                            <div className="copy_input" >
                                <Row>
                                    <Col span={16}>
                                        <Input   defaultValue={file.url}/>
                                    </Col>
                                    <Col span={6}>
                                        <CopyToClipboard text={file.url}
                                            onCopy={this.onCopy}>
                                            <Button >复制</Button>
                                        </CopyToClipboard>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                        )}

                    </ul>
                </div>
                :null}
            </div>
        );
        // return (
        //     <div>
        //         {fileList.length > 0 ?
        //         <div>
        //             <ul className="listImg">
        //                 {fileList.map((file) => <li><a target='_blank' href={file.preview}><img width="100" height='100' src={file.preview} /></a> {<Input placeholder="Basic usage" />}</li>)}

        //             </ul>
        //         </div>
        //      : null}
        //     </div>
        // );
    }
}

		// <div class="container mgt20">
		// 	<div class="item-img">
		// 		<a href="#"><img src="" class="img-rounded"></a>
		// 		<i class="glyphicon glyphicon-remove ico-remove"></i>
		// 	    <div class="input-group">
		// 	      	<input type="text" class="form-control" value="http://image.yuantutech.com/user/c6d9e55961ba88ee5a49cb9c2e75fefe-438-303.jpg">
		// 	      	<span class="input-group-btn">
		// 	        	<button class="btn btn-default" type="button">复制</button>
		// 	    	</span>
		// 		</div>
		// 	</div>
		// </div>
