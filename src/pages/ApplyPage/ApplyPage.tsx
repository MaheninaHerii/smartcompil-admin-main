import {
    IconButton,
    Menu,
    MenuItem,
    Paper,
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
import {PictureAsPdf} from "@mui/icons-material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getApplySelector} from "../../core/redux/selector/PosteSelectors";
import {IApply} from "../../core/data/interfaces/IApply";
import {fetchApplyRequest} from "../../core/redux/actions/PosteActions";
import {GET_DOCUMENT_APPLY} from "../../core/data/constants/UrlApi";

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

export default function ApplyPage() {
    const classes = useStyles();

    const ITEM_HEIGHT = 48;
    const dispatch = useDispatch();
    const rows = useSelector(getApplySelector);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [currentRow, setCurrentRow] = useState<IApply>({});
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
        dispatch(fetchApplyRequest());
    }, [dispatch]);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>, row: IApply) => {
        setAnchorEl(event.currentTarget);
        setCurrentRow(row);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const downloadCV = () => {
        window.open(
            GET_DOCUMENT_APPLY + '/' + currentRow.cv,
            '_blank' // <- This is what makes it open in a new window.
        )
        setAnchorEl(null);
    };


    const downloadLM = () => {
        window.open(
            GET_DOCUMENT_APPLY + '/' + currentRow.lm,
            '_blank' // <- This is what makes it open in a new window.
        )
        setAnchorEl(null);
    };


    return (
        <>
            <TableContainer component={Paper}>
                <div className={classes.search}>
                    <Typography variant="h4" align="center">
                        Liste des candidatures
                    </Typography>
                </div>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell>Poste</StyledTableCell>
                            <StyledTableCell>Message</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rows && rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {moment(row.applyAt).format("DD/MM/YYYY")}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.posteName}
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.message}
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
                                        <MenuItem onClick={downloadCV}>
                                            <PictureAsPdf/>
                                            Télécharger CV
                                        </MenuItem>
                                        {!!currentRow.lm && <MenuItem onClick={downloadLM}>
                                            <PictureAsPdf/>
                                            Télécharger LM
                                        </MenuItem>}
                                    </Menu>
                                </StyledTableCell>
                            </StyledTableRow>))
                        }</TableBody>
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
        </>
    );
}