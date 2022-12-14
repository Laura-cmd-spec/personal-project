import shortid from 'shortid';
import clsx from 'clsx';
import styles from '../../Product.module.scss'
import PropTypes from 'prop-types';

const Size = props =>{

    return(
        props.sizes.map(list=>{return<li key={shortid()}><button onClick={e=>props.setChoice({currentColor:props.currentColor, currentSize:list.name})}
        type="button" className={clsx( list.name === props.currentSize && styles.active)}>{list.name}</button></li>})
    )
}

    Size.propTypes={
    sizes: PropTypes.array.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
  }

export default Size;