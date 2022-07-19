import style from './resultTemplate.module.css'

const ResultTemplate = (props) => {
    return (
        <div >
            <table border='2' className={style.wrapper}>
                <thead>
                <tr>
                    <th className={style.column1}>Number</th>
                    <th className={style.column2}>Specs</th>
                    <th className={style.column3}>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={style.column1}>№ {props.index + 1}</td>
                    <td className={style.column2}>  University Name  </td>
                    <td className={style.column3}>  {props.name}  </td>
                </tr>
                <tr>
                    <td className={style.column1}> </td>
                    <td className={style.column2}>  Country  </td>
                    <td className={style.column3}>  {props.country}  </td>
                </tr>
                <tr>
                    <td className={style.column1}> </td>
                    <td className={style.column2}>Web Pages</td>
                    <td className={style.column3}>  <a href={props.domain} target={'_blank'}>{props.domain}</a>  </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResultTemplate