import ReactDOM from 'react-dom';
import { useContext } from 'react';
import Context from '../../store/context';
import styles from './Modal.module.scss';

const Modal = ({ ime, name, src, onClose }) => {
	const { dark, eng } = useContext(Context);
	return (
		<>
			{ReactDOM.createPortal(
				<div className={styles.backdrop} onClick={onClose} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<div
					className={`${styles.modal} ${
						dark ? styles.modal__dark : ''
					}`}>
					<img src={src} alt={name} />
					<div className='p-15'>
						<h3 className='title mb-10'>{eng ? name : ime}</h3>
						<div className='d-flex d-flex-end'>
							<button
								className='btn btn-primary'
								onClick={onClose}>
								{eng ? 'close' : 'zatvori'}
							</button>
						</div>
					</div>
				</div>,
				document.getElementById('modal-root')
			)}
		</>
	);
};

export default Modal;
