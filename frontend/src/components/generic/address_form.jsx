import { useState } from "react"

import style from "../css/theme.module.css"
import Optionlist from "./option_list"
import { Input } from "./forms/input"
import { Select } from "./forms/select"


const AddressForm = ({onAddressForm}) => {
    const [street, setStreet] = useState('');
    const [nbr, setNbr] = useState('');
    const [zip, setZip] = useState('');
    const [county, setCounty] = useState('');
    const [country, setCountry] = useState('Belgium');
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = document.forms[0];
        if (form.checkValidity() === false) {
            form.reportValidity();
            return
        }
        onAddressForm({
            "addressstreet": street, "addressnbr": nbr, "addresszip": zip, "addresscounty": county, "addresscountry": country});
    }

    const countries = [
    {name: "AF", value:"Afghanistan"},
    {name: "AX", value:"Aland Islands"},
    {name: "AL", value:"Albania"},
    {name: "DZ", value:"Algeria"},
    {name: "AS", value:"American Samoa"},
    {name: "AD", value:"Andorra"},
    {name: "AO", value:"Angola"},
    {name: "AI", value:"Anguilla"},
    {name: "AQ", value:"Antarctica"},
    {name: "AG", value:"Antigua and Barbuda"},
    {name: "AR", value:"Argentina"},
    {name: "AM", value:"Armenia"},
    {name: "AW", value:"Aruba"},
    {name: "AU", value:"Australia"},
    {name: "AT", value:"Austria"},
    {name: "AZ", value:"Azerbaijan"},
    {name: "BS", value:"Bahamas"},
    {name: "BH", value:"Bahrain"},
    {name: "BD", value:"Bangladesh"},
    {name: "BB", value:"Barbados"},
    {name: "BY", value:"Belarus"},
    {name: "BE", value:"Belgium"},
    {name: "BZ", value:"Belize"},
    {name: "BJ", value:"Benin"},
    {name: "BM", value:"Bermuda"},
    {name: "BT", value:"Bhutan"},
    {name: "BO", value:"Bolivia"},
    {name: "BQ", value:"Bonaire, Sint Eustatius and Saba"},
    {name: "BA", value:"Bosnia and Herzegovina"},
    {name: "BW", value:"Botswana"},
    {name: "BV", value:"Bouvet Island"},
    {name: "BR", value:"Brazil"},
    {name: "IO", value:"British Indian Ocean Territory"},
    {name: "BN", value:"Brunei Darussalam"},
    {name: "BG", value:"Bulgaria"},
    {name: "BF", value:"Burkina Faso"},
    {name: "BI", value:"Burundi"},
    {name: "KH", value:"Cambodia"},
    {name: "CM", value:"Cameroon"},
    {name: "CA", value:"Canada"},
    {name: "CV", value:"Cape Verde"},
    {name: "KY", value:"Cayman Islands"},
    {name: "CF", value:"Central African Republic"},
    {name: "TD", value:"Chad"},
    {name: "CL", value:"Chile"},
    {name: "CN", value:"China"},
    {name: "CX", value:"Christmas Island"},
    {name: "CC", value:"Cocos (Keeling) Islands"},
    {name: "CO", value:"Colombia"},
    {name: "KM", value:"Comoros"},
    {name: "CG", value:"Congo"},
    {name: "CD", value:"Congo, Democratic Republic of the Congo"},
    {name: "CK", value:"Cook Islands"},
    {name: "CR", value:"Costa Rica"},
    {name: "CI", value:"Cote D'Ivoire"},
    {name: "HR", value:"Croatia"},
    {name: "CU", value:"Cuba"},
    {name: "CW", value:"Curacao"},
    {name: "CY", value:"Cyprus"},
    {name: "CZ", value:"Czech Republic"},
    {name: "DK", value:"Denmark"},
    {name: "DJ", value:"Djibouti"},
    {name: "DM", value:"Dominica"},
    {name: "DO", value:"Dominican Republic"},
    {name: "EC", value:"Ecuador"},
    {name: "EG", value:"Egypt"},
    {name: "SV", value:"El Salvador"},
    {name: "GQ", value:"Equatorial Guinea"},
    {name: "ER", value:"Eritrea"},
    {name: "EE", value:"Estonia"},
    {name: "ET", value:"Ethiopia"},
    {name: "FK", value:"Falkland Islands (Malvinas)"},
    {name: "FO", value:"Faroe Islands"},
    {name: "FJ", value:"Fiji"},
    {name: "FI", value:"Finland"},
    {name: "FR", value:"France"},
    {name: "GF", value:"French Guiana"},
    {name: "PF", value:"French Polynesia"},
    {name: "TF", value:"French Southern Territories"},
    {name: "GA", value:"Gabon"},
    {name: "GM", value:"Gambia"},
    {name: "GE", value:"Georgia"},
    {name: "DE", value:"Germany"},
    {name: "GH", value:"Ghana"},
    {name: "GI", value:"Gibraltar"},
    {name: "GR", value:"Greece"},
    {name: "GL", value:"Greenland"},
    {name: "GD", value:"Grenada"},
    {name: "GP", value:"Guadeloupe"},
    {name: "GU", value:"Guam"},
    {name: "GT", value:"Guatemala"},
    {name: "GG", value:"Guernsey"},
    {name: "GN", value:"Guinea"},
    {name: "GW", value:"Guinea-Bissau"},
    {name: "GY", value:"Guyana"},
    {name: "HT", value:"Haiti"},
    {name: "HM", value:"Heard Island and Mcdonald Islands"},
    {name: "VA", value:"Holy See (Vatican City State)"},
    {name: "HN", value:"Honduras"},
    {name: "HK", value:"Hong Kong"},
    {name: "HU", value:"Hungary"},
    {name: "IS", value:"Iceland"},
    {name: "IN", value:"India"},
    {name: "ID", value:"Indonesia"},
    {name: "IR", value:"Iran, Islamic Republic of"},
    {name: "IQ", value:"Iraq"},
    {name: "IE", value:"Ireland"},
    {name: "IM", value:"Isle of Man"},
    {name: "IL", value:"Israel"},
    {name: "IT", value:"Italy"},
    {name: "JM", value:"Jamaica"},
    {name: "JP", value:"Japan"},
    {name: "JE", value:"Jersey"},
    {name: "JO", value:"Jordan"},
    {name: "KZ", value:"Kazakhstan"},
    {name: "KE", value:"Kenya"},
    {name: "KI", value:"Kiribati"},
    {name: "KP", value:"Korea, Democratic People's Republic of"},
    {name: "KR", value:"Korea, Republic of"},
    {name: "XK", value:"Kosovo"},
    {name: "KW", value:"Kuwait"},
    {name: "KG", value:"Kyrgyzstan"},
    {name: "LA", value:"Lao People's Democratic Republic"},
    {name: "LV", value:"Latvia"},
    {name: "LB", value:"Lebanon"},
    {name: "LS", value:"Lesotho"},
    {name: "LR", value:"Liberia"},
    {name: "LY", value:"Libyan Arab Jamahiriya"},
    {name: "LI", value:"Liechtenstein"},
    {name: "LT", value:"Lithuania"},
    {name: "LU", value:"Luxembourg"},
    {name: "MO", value:"Macao"},
    {name: "MK", value:"Macedonia, the Former Yugoslav Republic of"},
    {name: "MG", value:"Madagascar"},
    {name: "MW", value:"Malawi"},
    {name: "MY", value:"Malaysia"},
    {name: "MV", value:"Maldives"},
    {name: "ML", value:"Mali"},
    {name: "MT", value:"Malta"},
    {name: "MH", value:"Marshall Islands"},
    {name: "MQ", value:"Martinique"},
    {name: "MR", value:"Mauritania"},
    {name: "MU", value:"Mauritius"},
    {name: "YT", value:"Mayotte"},
    {name: "MX", value:"Mexico"},
    {name: "FM", value:"Micronesia, Federated States of"},
    {name: "MD", value:"Moldova, Republic of"},
    {name: "MC", value:"Monaco"},
    {name: "MN", value:"Mongolia"},
    {name: "ME", value:"Montenegro"},
    {name: "MS", value:"Montserrat"},
    {name: "MA", value:"Morocco"},
    {name: "MZ", value:"Mozambique"},
    {name: "MM", value:"Myanmar"},
    {name: "NA", value:"Namibia"},
    {name: "NR", value:"Nauru"},
    {name: "NP", value:"Nepal"},
    {name: "NL", value:"Netherlands"},
    {name: "AN", value:"Netherlands Antilles"},
    {name: "NC", value:"New Caledonia"},
    {name: "NZ", value:"New Zealand"},
    {name: "NI", value:"Nicaragua"},
    {name: "NE", value:"Niger"},
    {name: "NG", value:"Nigeria"},
    {name: "NU", value:"Niue"},
    {name: "NF", value:"Norfolk Island"},
    {name: "MP", value:"Northern Mariana Islands"},
    {name: "NO", value:"Norway"},
    {name: "OM", value:"Oman"},
    {name: "PK", value:"Pakistan"},
    {name: "PW", value:"Palau"},
    {name: "PS", value:"Palestinian Territory, Occupied"},
    {name: "PA", value:"Panama"},
    {name: "PG", value:"Papua New Guinea"},
    {name: "PY", value:"Paraguay"},
    {name: "PE", value:"Peru"},
    {name: "PH", value:"Philippines"},
    {name: "PN", value:"Pitcairn"},
    {name: "PL", value:"Poland"},
    {name: "PT", value:"Portugal"},
    {name: "PR", value:"Puerto Rico"},
    {name: "QA", value:"Qatar"},
    {name: "RE", value:"Reunion"},
    {name: "RO", value:"Romania"},
    {name: "RU", value:"Russian Federation"},
    {name: "RW", value:"Rwanda"},
    {name: "BL", value:"Saint Barthelemy"},
    {name: "SH", value:"Saint Helena"},
    {name: "KN", value:"Saint Kitts and Nevis"},
    {name: "LC", value:"Saint Lucia"},
    {name: "MF", value:"Saint Martin"},
    {name: "PM", value:"Saint Pierre and Miquelon"},
    {name: "VC", value:"Saint Vincent and the Grenadines"},
    {name: "WS", value:"Samoa"},
    {name: "SM", value:"San Marino"},
    {name: "ST", value:"Sao Tome and Principe"},
    {name: "SA", value:"Saudi Arabia"},
    {name: "SN", value:"Senegal"},
    {name: "RS", value:"Serbia"},
    {name: "CS", value:"Serbia and Montenegro"},
    {name: "SC", value:"Seychelles"},
    {name: "SL", value:"Sierra Leone"},
    {name: "SG", value:"Singapore"},
    {name: "SX", value:"Sint Maarten"},
    {name: "SK", value:"Slovakia"},
    {name: "SI", value:"Slovenia"},
    {name: "SB", value:"Solomon Islands"},
    {name: "SO", value:"Somalia"},
    {name: "ZA", value:"South Africa"},
    {name: "GS", value:"South Georgia and the South Sandwich Islands"},
    {name: "SS", value:"South Sudan"},
    {name: "ES", value:"Spain"},
    {name: "LK", value:"Sri Lanka"},
    {name: "SD", value:"Sudan"},
    {name: "SR", value:"Suriname"},
    {name: "SJ", value:"Svalbard and Jan Mayen"},
    {name: "SZ", value:"Swaziland"},
    {name: "SE", value:"Sweden"},
    {name: "CH", value:"Switzerland"},
    {name: "SY", value:"Syrian Arab Republic"},
    {name: "TW", value:"Taiwan, Province of China"},
    {name: "TJ", value:"Tajikistan"},
    {name: "TZ", value:"Tanzania, United Republic of"},
    {name: "TH", value:"Thailand"},
    {name: "TL", value:"Timor-Leste"},
    {name: "TG", value:"Togo"},
    {name: "TK", value:"Tokelau"},
    {name: "TO", value:"Tonga"},
    {name: "TT", value:"Trinidad and Tobago"},
    {name: "TN", value:"Tunisia"},
    {name: "TR", value:"Turkey"},
    {name: "TM", value:"Turkmenistan"},
    {name: "TC", value:"Turks and Caicos Islands"},
    {name: "TV", value:"Tuvalu"},
    {name: "UG", value:"Uganda"},
    {name: "UA", value:"Ukraine"},
    {name: "AE", value:"United Arab Emirates"},
    {name: "GB", value:"United Kingdom"},
    {name: "US", value:"United States"},
    {name: "UM", value:"United States Minor Outlying Islands"},
    {name: "UY", value:"Uruguay"},
    {name: "UZ", value:"Uzbekistan"},
    {name: "VU", value:"Vanuatu"},
    {name: "VE", value:"Venezuela"},
    {name: "VN", value:"Viet Nam"},
    {name: "VG", value:"Virgin Islands, British"},
    {name: "VI", value:"Virgin Islands, U.s."},
    {name: "WF", value:"Wallis and Futuna"},
    {name: "EH", value:"Western Sahara"},
    {name: "YE", value:"Yemen"},
    {name: "ZM", value:"Zambia"},
    {name: "ZW", value:"Zimbabwe"}
    ]

    const isString = (inpt) => {
        if (/\d/.test(inpt))
            return {state:false, message:"must be a string"}
        return {state: true};
    }

    const updateSelect = (e) => {
        setCountry(e.target.value);
    }

    return (
        <>
            <div className={style.border + " d-flex justify-content-center"}>
                <form>
                    <div className="row mb-4">
                        <div className="col-4"></div>
                        <div><h1>Address</h1></div>
                    </div>
                    <div className="row mb-2">
                        <Input name="addressstreet" label="Street" type="text" validators={[isString]} onChange={setStreet} classNames={{"label": "col-3", "input": "col-7"}} value={street} placeholder={"street"}/>
                    </div>
                    <div className="row mb-2">
                        <Input name="addresssnbr" label="nr??" type="number" validators={[]} onChange={setNbr} classNames={{"label": "col-3", "input": "col-4"}} value={nbr} placeholder={"24"}/>
                    </div>
                    <div className="row mb-2">
                        <Input name="addresszip" label="Zip" type="number" validators={[]} onChange={setZip} classNames={{"label": "col-3", "input": "col-4"}} value={zip} placeholder={"1234"}/>
                    </div>
                    <div className="row mb-2">
                        <Input name="addresscounty" label="County" type="text" validators={[isString]} onChange={setCounty} classNames={{"label": "col-3", "input": "col-6"}} value={county} placeholder={"county"}/>
                    </div>
                    <div className="row mb-4">
                        <Select name="addresscountry" label="country" value={country} optionList={<><option defaultValue={true}></option><Optionlist options={countries}/></>} onChange={updateSelect} classNames={{"label": "col-3", "input": "col-5"}}/>
                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6">
                            <input type="submit" className={"form-control " + style.big_info_submit} onClick={handleSubmit}/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddressForm