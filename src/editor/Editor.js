import React, { Component } from 'react';
import './../App';
import { EditorState, convertToRaw, ContentState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


const initialHTML = `<p><mark class="mark1">This non-binding term sheet dated</mark><mark class="mark4"><span data-bind="text: date"></span></mark><mark class="mark1">is entered between,</mark><mark class="mark4"><span data-bind="text: company"></span></mark><mark class="mark1">,</mark><mark class="mark4"><span data-bind="text:investorOne"></span></mark><mark class="mark1"> and </mark><mark class="mark4"><span data-bind="text:investorTwo"></span></mark><mark class="mark1">to summarize the principal terms of the financing round that Company proposes to raise from </mark><mark class="mark4"><span data-bind="text:investorOne"></span></mark> <mark class="mark1">and</mark><mark class="mark4"><span data-bind="text:investorTwo"></span></mark>.<mark class="mark2">This Term Sheet is for discussion purposes only.</mark><mark class="mark1">The completion of the transactions contemplated by this term sheet will be subject to completion of due diligence, completion and executions of definitive agreements (“Definitives”) and fulfillment of conditions precedent and closing actions amongst others.</mark></p><p><mark class="mark4"><span data-bind="text:investorOne"></span></mark><mark class="mark1">and</mark><mark class="mark4"><span data-bind="text:investorTwo"></span></mark><mark class="mark1">may hereinafter individually be referred to as “Investor” and collectively be referred to as “Investors”. Investors,</mark><mark class="mark4"><span data-bind="text: company"></span></mark><mark class="mark1">and Founders may hereinafter individually be referred to as “Party” and collectively referred to as “Parties”.</mark></p><table class="table table-striped table-bordered dt-responsive nowrap" id="datatable-responsive" cellspacing="0" width="100%"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td class="dataCell"><p>1</p></td><td class="dataCell"><p>Parties</p><span class="clause">(Present In 100% of 35 documents)</span></td><td class="dataCell"><ol style="font-size:16px;"><li><p><mark class="mark4"><span data-bind="text:investorOne"></span></mark></p></li><li><p><mark class="mark4"><span data-bind="text:investorTwo"></span></mark></p></li><li><p><mark class="mark4"><span data-bind="text:company"></span></mark></p></li><li><p><mark class="mark4"><span data-bind="text:founders"></span></mark></p></li></ol></td></tr></tbody></table>`;
export default class EditorOne extends Component {
    
    constructor(props) {
        super(props);
        const html = initialHTML;
        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
        const editorState = EditorState.createWithContent(contentState);
        this.state = {
            editorState,
        };
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }
    
    onEditorStateChange(editorState) {
        this.setState( () => {
          editorState
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <div className="label-input">
                    <p className="custom-label">Company Name</p>
                    <input type="text" className="form input"/>
                </div>

                <div className="label-input">
                    <p className="custom-label">Date</p>
                    <input type="date" className="form input"/>
                </div>

                <div className="label-input">
                    <p className="custom-label">Investor 1</p>
                    <input type="text" className="form input"/>
                </div>

                <div className="label-input">
                    <p className="custom-label">Investor 2</p>
                    <input type="text" className="form input"/>
                </div>

                <div className="label-input">
                    <p className="custom-label">Founder Name</p>
                    <input type="text" className="form input"/>
                </div>

                <div className="editor" style={{padding: '50px'}}>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={this.onEditorStateChange}
                    />

                </div>
            </div>
        )
    }
}