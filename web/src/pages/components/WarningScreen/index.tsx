import React from 'react';
import { Modal, Fade } from '@material-ui/core';
import { FiCheckCircle } from 'react-icons/fi';

import useStyles from './styles';

interface WarningScreenProps {
  open: boolean;
}

const WarningScreen: React.FC<WarningScreenProps> = (props) => {
  const classes = useStyles();

  return (
    <Modal
      disableEnforceFocus
      disableAutoFocus
      className={classes.modal}
      open={props.open}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <span>
            <FiCheckCircle color="#34CB79" size={65} />
          </span>
          <p className={classes.text}>Cadastro realizado com sucesso!</p>
        </div>
      </Fade>
    </Modal>
  );
}

export default WarningScreen;