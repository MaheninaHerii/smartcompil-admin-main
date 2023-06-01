import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import {createStyles, makeStyles, withStyles} from "@mui/styles";
import {Theme} from "@mui/system";
import {deepPurple} from "@mui/material/colors";
import {
    Add,
    DeleteForever, FileCopy,
    Public,
    RemoveRedEye,
    VpnLock
} from "@mui/icons-material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {
    deletePosteRequest, fetchPosteListRequest, putDuplicatePosteRequest,
    putUpdateStatePosteRequest
} from "../../../core/redux/actions/PosteActions";
import {
    getErrorPosteSelector,
    getPosteListSelector,
    getPendingPosteSelector
} from "../../../core/redux/selector/PosteSelectors";
import {IPoste} from "../../../core/data/interfaces/IPoste";

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: deepPurple[500],
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },

    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        table: {
            minWidth: 700,
        },
        btn: {
            margin: 20,
            marginLeft: 50,
            minWidth: 200
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.common.white,
            '&:hover': {
                backgroundColor: theme.palette.common.white,
            },
            marginRight: 10,
            marginBottom: 10,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',

            },
        },
        searchIcon: {
            padding: theme.spacing(4, 65),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'right',
            fontSize: 13
        },
        test: {
            color: 'inherit',
            border: 3,
            m: 1,
            margin: theme.spacing(1),
            minWidth: 500,
        },

    }),
);

const ColorButton = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
        '&:hover': {
            backgroundColor: deepPurple[500],
        },
    },
}))(Button);

export default function PosteList() {
    const classes = useStyles();

    const ITEM_HEIGHT = 48;
    const history = useNavigate();
    const dispatch = useDispatch();
    const pending = useSelector(getPendingPosteSelector);
    const rows = useSelector(getPosteListSelector);
    const error = useSelector(getErrorPosteSelector);
    const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currentRow, setCurrentRow] = useState<IPoste>({});
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    useEffect(() => {
        dispatch(fetchPosteListRequest());
    }, [dispatch]);

    const open = Boolean(anchorEl);

    const handleClickOpenConfirmDialog = () => {
        setOpenConfirmDialog(true);
        handleClose();
    };

    const handleCloseConfirmDialog = () => {
        setOpenConfirmDialog(false);
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>, row: IPoste) => {
        setAnchorEl(event.currentTarget);
        setCurrentRow(row);
    };

    const handlePublished = () => {
        dispatch(putUpdateStatePosteRequest(currentRow));
        handleClose();
    }

    const handleDuplicatePoste = () => {
        dispatch(putDuplicatePosteRequest(currentRow));
        handleClose();
    }

    const handleDelete = () => {
        dispatch(deletePosteRequest(currentRow && currentRow.id || 0));
        handleCloseConfirmDialog();
    }

    const goToDetail = () => {
        history(`/poste/detail/${currentRow.id}`);
    }

    const goToEdit = () => {
        history(`/poste/modifier/${currentRow.id}`);
    }

    const goToNew = () => {
        history(`/poste/nouveau`);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <div className={classes.search}>
                    <Typography variant="h4">
                        Poste
                    </Typography>
                    <ColorButton
                        startIcon={<Add/>}
                        className={classes.btn} variant="contained" color="primary"
                        onClick={goToNew}
                    >
                        Nouveau
                    </ColorButton>
                </div>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Titre</StyledTableCell>
                            <StyledTableCell>Mission</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {
                        pending || !!error ? (
                                <Box sx={{width: '480%'}}>
                                    <Skeleton/>
                                    <Skeleton animation="wave"/>
                                    <Skeleton animation={false}/>
                                </Box>) :
                            (<TableBody>
                                {(rows && rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.title}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            {row.published ?
                                                <Chip icon={<Public/>} label="Publié" color="success"
                                                      variant="outlined"/> :
                                                <Chip icon={<VpnLock/>} label="Non Publié" color="error"
                                                      variant="outlined"/>}
                                        </StyledTableCell>
                                        <StyledTableCell component="th" scope="row" align="right">
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls={open ? 'menu_id_' + row.id : undefined}
                                                aria-expanded={open ? 'true' : undefined}
                                                aria-haspopup="true"
                                                onClick={(event) => handleClick(event, row)}
                                            >
                                                <MoreVertIcon/>
                                            </IconButton>
                                            <Menu
                                                id={'menu_id_' + row.id}
                                                MenuListProps={{
                                                    'aria-labelledby': 'long-button',
                                                }}
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                PaperProps={{
                                                    style: {
                                                        maxHeight: ITEM_HEIGHT * 4.5,
                                                        width: '20ch',
                                                    },
                                                }}
                                            >
                                                <MenuItem onClick={goToDetail}>
                                                    <RemoveRedEye/>
                                                    Consulter
                                                </MenuItem>
                                                <MenuItem onClick={goToEdit}>
                                                    <EditIcon/>
                                                    Modifier
                                                </MenuItem>
                                                <MenuItem onClick={handleDuplicatePoste}>
                                                    <FileCopy/>
                                                    Dupliquer
                                                </MenuItem>
                                                {!currentRow?.published ? (
                                                    <>
                                                        <MenuItem onClick={handleClickOpenConfirmDialog}>
                                                            <DeleteForever/>
                                                            Supprimer
                                                        </MenuItem>
                                                        <MenuItem onClick={handlePublished}>
                                                            <Public/>
                                                            Publier
                                                        </MenuItem>
                                                    </>
                                                ) : (
                                                    <MenuItem onClick={handlePublished}>
                                                        <Public/>
                                                        Dépublier
                                                    </MenuItem>
                                                )}
                                            </Menu>
                                        </StyledTableCell>
                                    </StyledTableRow>))
                                }</TableBody>)}
                </Table>
            </TableContainer>
            {rows && <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />}
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
        </>
    );
}