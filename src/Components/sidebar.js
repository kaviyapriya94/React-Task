import React from 'react';
export default function Sidebar({setSelect,handleChecked}){
//    const[checked,setChecked]=useState('');
    return(
        <div>
            <div className="sidenav">
                <h3 className="pb-1 pt-1">Sort by</h3>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check1" name="atoz" value="atoz" onChange={handleChecked}/>
                    <label className="form-check-label">A-Z</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check2" name="AtoZ" value="ZtoA" onChange={handleChecked}/>
                    <label className="form-check-label">Z-A</label>
                </div>
                <h3 className="pb-1 pt-1">Sort by</h3>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check3" name="NtoO" value="NtoO" onChange={handleChecked}/>
                    <label className="form-check-label">Newer to Older</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check4" name="OtoN" value="OtoN" onChange={handleChecked}/>
                    <label className="form-check-label">Older to Newer</label>
                </div>
                <h3 className='pt-1 pb-1'>Price</h3>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check5" name="LtoH" value="LtoH" onChange={handleChecked}/>
                    <label className="form-check-label">Low to High</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="check6" name="HtoL" value="HtoL" onChange={handleChecked}/> 
                    <label className="form-check-label">High to Low</label>
                </div>
                {/* <div className="pt-2">
                <button className="btn btn-md bg-white text-primary"onClick={handleChecked}>Apply</button>
                </div> */}
                <div>
                    <h5 className="text-white pt-2">Catagory</h5>
                    <div className="select pt-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check5" name="Men's Clothing" value="Men's Clothing" onChange={handleChecked}/>
                            <label className="form-check-label">Men's Clothing</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check6" name="Jewelery" value="Jewelery" onChange={handleChecked}/> 
                            <label className="form-check-label">Jewelery</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check6" name="Electronics" value="Electronics" onChange={handleChecked}/> 
                            <label className="form-check-label">Electronics</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="check6" name="Women's Clothing" value="Women's Clothing" onChange={handleChecked}/> 
                            <label className="form-check-label">Women's Clothing</label>
                        </div>

                        {/* <select onChange={setSelect}>
                            <option value="all">All</option>
                            <option value="men's clothing">Men's Clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="Electronics">Electronics</option>
                            <option value="women's clothing">Women's Clothing</option>
                        </select> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
