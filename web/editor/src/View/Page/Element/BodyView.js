import ElementComponent from '../ElementComponent'
import ElementFrame from '../UI/ElementFrame'
import SectionView from '../Element/SectionView'
import React from 'react'

class BodyView extends ElementComponent {
    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)
        const children = this.renderKids(source.children)

        return (
            <div className="page">
                <div id={source.uuid} style={style} onClick={this.handleClick} className="element-body">
                    <ElementFrame visible={source.selected}/>
                    {children}
                </div>
            </div>
        )
    }

    renderKids (childArray = []) {
        return childArray.map((child) => <SectionView key={child.uuid} source={child}/>)
    }
}

export default BodyView
