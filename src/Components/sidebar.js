import React from 'react';
export default function Sidebar({handleChecked,HandleSelectM,HandleSelectJ,
    HandleSelectE,HandleSelectW,HandleUncheck,isselectM,isselectJ,isselectE,
    isselectW,isselectA,isselectZ,isselectN,isselectL,isselectO,isselectH,
    below499,below1000,handleBelow499,handleBelow1000}){
//    const[checked,setChecked]=useState('');
    return(
        <div>
            <div className="sidenav">
                <div className="text-right pb-2">
                    <button onClick={HandleUncheck} className="btn btn-sm text-primary bg-white">Clear</button>
                </div>
                <h4 className=" pt-1">Sort by</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio1" name="atoz" value="atoz" onChange={handleChecked} checked={isselectA}/>
                    <label className="form-check-label">A-Z</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio2" name="atoz" value="ZtoA"  onChange={handleChecked} checked={isselectZ}/>
                    <label className="form-check-label">Z-A</label>
                </div>
                <h4 className=" pt-1">Sort by</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio3" name="NtoO" value="NtoO" onChange={handleChecked} checked={isselectN}/>
                    <label className="form-check-label">Newer to Older</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio4" name="NtoO" value="OtoN" onChange={handleChecked}checked={isselectO}/>
                    <label className="form-check-label">Older to Newer</label>
                </div>
                <h4 className='pt-1'>Price</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio5" name="LtoH" value="LtoH" onChange={handleChecked} checked={isselectL}/>
                    <label className="form-check-label">Low to High</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio6" name="LtoH" value="HtoL" onChange={handleChecked} checked={isselectH}/> 
                    <label className="form-check-label">High to Low</label>
                </div>
                <h4 className='pt-1'>Range</h4>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio5" name="1-499" value="1-499" onChange={handleBelow499} checked={below499}/>
                    <label className="form-check-label">1-499</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" id="radio6" name="500-1000" value="500-1000" onChange={handleBelow1000} checked={below1000}/> 
                    <label className="form-check-label">500-1000</label>
                </div>

                <div>
                    <h5 className="text-white pt-2">Catagory</h5>
                    <div className="select pt-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="men" name="men's clothing" value="men's clothing" onChange={HandleSelectM} checked={isselectM} />
                            <label className="form-check-label" htmlFor='men'>Men's Clothing</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="jewelery" name="jewelery" value="jewelery" onChange={HandleSelectJ} checked={isselectJ}/> 
                            <label className="form-check-label" htmlFor='jewelery'>Jewelery</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="electronics" name="electronics" value="electronics" onChange={HandleSelectE} checked={isselectE}/> 
                            <label className="form-check-label"htmlFor='electronics'>Electronics</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="women" name="women's clothing" value="women's clothing" onChange={HandleSelectW} checked={isselectW}/> 
                            <label className="form-check-label"htmlFor='women'>Women's Clothing</label>
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
