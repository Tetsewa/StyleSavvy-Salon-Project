import React, {useEffect, useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';
import {Tag} from 'primereact/tag';
import {ProductService} from '/src/components/ProductService';
import HomeBanner from "../components/HomeBanner";
//import axios from "axios";
//const API_URL = "https://stylesavvy.adaptable.app/"

const MyReservation = () => {
    const [products, setProducts] = useState(null);
    const [statuses] = useState(['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK']);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
   
    const getSeverity = (value) => {
        switch (value) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let {newData, index} = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)}/>;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <Tag value={option} severity={getSeverity(option)}></Tag>;
                }}
            />
        );
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency"
                            currency="USD" locale="en-US"/>;
    };

    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)}></Tag>;
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(rowData.price);
    };

    const allowEdit = (rowData) => {
        return rowData.name !== 'Blue Band';
    };

    return (

        <div>
            <HomeBanner/>

            <form style={{width: '80%'}}>

                <h2>Finalise your booking!</h2>
                <div className="control-row">
                    <div className="control">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name"/>
                    </div>

                    <div className="control">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name"/>
                    </div>
                </div>

                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"/>
                </div>

                <div className="control">
                    <label htmlFor="contact-number">Contact Number</label>
                    <input type="text" id="contact-number" name="contact-number"/>
                </div>

                <hr/>
                <div className="card p-fluid">
                    <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete}
                               tableStyle={{minWidth: '50rem'}}>
                        <Column field="code" header="Services" editor={(options) => textEditor(options)}
                                style={{width: '20%'}}></Column>
                        <Column field="name" header="Name" editor={(options) => textEditor(options)}
                                style={{width: '20%'}}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate}
                                editor={(options) => statusEditor(options)} style={{width: '20%'}}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate}
                                editor={(options) => priceEditor(options)} style={{width: '20%'}}></Column>
                        <Column rowEditor={allowEdit} headerStyle={{width: '10%', minWidth: '8rem'}}
                                bodyStyle={{textAlign: 'center'}}></Column>
                    </DataTable>
                </div>
                <hr/>
                <p className="form-actions">
                    <button type="submit" className="button">
                        Submit!                    </button>
                </p>
            </form>


        </div>
    );
}

export default MyReservation
