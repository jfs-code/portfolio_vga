import React, { useState } from 'react';
import './css/Form.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        maxWidth: '80%',
        width: 400, 
        padding: theme.spacing(3),
    },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main), 
    '&.MuiDialogTitle-root': {
        background: 'var(--dark-Green)', 
        color: 'var(--pink)',
        fontSize: '1.5rem',
    },
}));

const StyledDialogContentText = styled(DialogContentText)(({ theme }) => ({
    fontSize: '1.3rem',
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    justifyContent: 'center',
    '& .MuiButton-root': {
        color: 'var(--pink)',
        fontSize: '1.3rem',
    },
}));

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });

        let tempErrors = { ...errors };
        switch (name) {
            case 'fullName':
                tempErrors.fullName = value ? '' : 'El nombre completo es requerido';
                break;
            case 'email':
                tempErrors.email = value ? '' : 'El Email es requerido';
                break;
            case 'subject':
                tempErrors.subject = value ? '' : 'El tema es requerido';
                break;
            case 'message':
                tempErrors.message = value ? '' : 'El mensaje es requerido';
                break;
            default:
                break;
        }
        setErrors(tempErrors);
    };
    
    const validate = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = "El nombre completo es requerido";
        if (!formData.email) tempErrors.email = "El Email es requerido";
        if (!formData.subject) tempErrors.subject = "El tema es requerido";
        if (!formData.message) tempErrors.message = "El mensaje es requerido";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdAl7fn47TkQfchcElMBQO3g59eFK0KiIq8QloNFbojSV01DQ/formResponse';
            
            const formDataSubmit = new FormData();
            formDataSubmit.append('entry.288849404', formData.fullName); 
            formDataSubmit.append('entry.61740073', formData.email); 
            formDataSubmit.append('entry.565624442', formData.subject);
            formDataSubmit.append('entry.1234419938', formData.message);

            const currentDate = new Date();
            const date = currentDate.toISOString().split('T')[0];
            const time = currentDate.toTimeString().split(' ')[0];

            const [year, month, day] = date.split('-');
            formDataSubmit.append('entry.1240604319_year', year); 
            formDataSubmit.append('entry.1240604319_month', month);
            formDataSubmit.append('entry.1240604319_day', day);

            const [hour, minute] = time.split(':');
            formDataSubmit.append('entry.752076140_hour', hour);
            formDataSubmit.append('entry.752076140_minute', minute);

            console.log([...formDataSubmit.entries()]);

            fetch(googleFormUrl, {
                method: 'POST',
                body: formDataSubmit,
                mode: 'no-cors'
            }).then(() => {
                setOpen(true);
                setFormData({
                  fullName: '',
                  email: '',
                  subject: '',
                  message: ''
                });
                setErrors({});
            }).catch(error => {
                console.error('Error al enviar el formulario', error);
            });
        }
    };

    const handleClose = () => {
      setOpen(false);
    };
    
    return (
      <div className="form-container">
        <div className="form-title">
            <h1>Contáctame</h1>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="fullName">Nombre completo</label>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-control">
                <label htmlFor="subject">Tema</label>
                <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
            </div>
            <div className="form-control">
                <label htmlFor="message">Mensaje</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                ></textarea>
                {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit">Enviar</button>
        </form>

        <StyledDialog
           open={open}
           onClose={handleClose}
        >
          <StyledDialogTitle>{"Éxito"}</StyledDialogTitle>
          <DialogContent>
            <StyledDialogContentText>
              Su información fue registrada satisfactoriamente.
            </StyledDialogContentText>
          </DialogContent>
          <StyledDialogActions>
            <Button onClick={handleClose} color="primary">
              Cerrar
            </Button>
          </StyledDialogActions>
        </StyledDialog>

      </div>
    );
}

export default Form;