import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import {DeleteForever, Public, Save, VpnLock} from "@mui/icons-material";
import {
    Button,
    Chip,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Tooltip
} from "@mui/material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getPendingSlideSelector,
    getSlideListSelector
} from "../../core/redux/selector/SlideSelectors";
import {
    deleteSlideRequest,
    fetchSlideListRequest,
    postSlideRequest,
    putUpdateStateSlideRequest
} from "../../core/redux/actions/SlideActions";
import {IArticle} from "../../core/data/interfaces/IArticle";

export default function SlidePage() {
    const [selectedFile, setSelectedFile] = useState<File>();
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSlideSelector);
    const slideList = useSelector(getSlideListSelector);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [currentRow, setCurrentRow] = useState<IArticle>({});

    useEffect(() => {
        dispatch(fetchSlideListRequest());
    }, [dispatch]);

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files)
            setSelectedFile(files[0]);
    }

    const handlePublished = (row: IArticle) => {
        dispatch(putUpdateStateSlideRequest(row));
    }

    const onClickDelete = (row: IArticle) => {
        setCurrentRow(row);
        setOpenConfirmDialog(true);
    }

    const handleDelete = () => {
        dispatch(deleteSlideRequest(currentRow && currentRow.id || 0));
        setOpenConfirmDialog(false);
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile as Blob);
            dispatch(postSlideRequest(formData));
        }
    }

    const handleCloseConfirmDialog = () => {
        setOpenConfirmDialog(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="icon-button-file">
                    <input id="icon-button-file" type="file"
                           accept="image/*" multiple={false}
                           onChange={onFileChange}/>
                </label>
                <Button variant="contained" color="primary" startIcon={<Save/>}
                        type="submit" style={{marginRight: 10}}>
                    {pending && (<><CircularProgress color="inherit"/>&nbsp;</>)}
                    Envoyer
                </Button>
            </form>
            <Grid container spacing={2}>
                {slideList && slideList.map(row => {
                    return (<Grid item xs={4} key={row.id}>
                        <Card sx={{maxWidth: 345}}>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        {row.published ? <>
                                            <Chip icon={<Public/>} label="Publié" color="success"
                                                  variant="outlined"/>
                                            <Tooltip title="Depublié" aria-label="add">
                                                <VpnLock style={{color: "red"}} onClick={() => handlePublished(row)}/>
                                            </Tooltip>
                                        </> : <>
                                            <Chip icon={<VpnLock/>} label="Non Publié" color="error"
                                                  variant="outlined"/>
                                            <Tooltip title="Publié" aria-label="add">
                                                <Public style={{color: "green"}} onClick={() => handlePublished(row)}/>
                                            </Tooltip>
                                            <Tooltip title="Supprimer" aria-label="add">
                                                <DeleteForever style={{color: "red"}}
                                                               onClick={() => onClickDelete(row)}/>
                                            </Tooltip>
                                        </>
                                        }
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={row.image || ''}
                                alt="Paella dish"
                            />
                        </Card></Grid>)
                })}
            </Grid>
            <Dialog
                open={openConfirmDialog}
                onClose={handleCloseConfirmDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmation de suppression"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Vous voulez vraiment le supprimer ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirmDialog}>Annuler</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
