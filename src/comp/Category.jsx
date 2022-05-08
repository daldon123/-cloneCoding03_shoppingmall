import MenuIcon from '@mui/icons-material/Menu';

const Category = () => {
  return (
    <div className='Category'>
        <div className='Category-bar'>
            <div className='Category-bar-dropbar'>
                <MenuIcon className='Category-bar-dropbar-MenuIcon'/>
            </div>
            <div className='Category-bar-menu'>
                신상품
            </div>
            <div className='Category-bar-menu'>
                베스트
            </div>
            <div className='Category-bar-menu'>
                스테디셀러
            </div>
            <div className='Category-bar-menu'>
                당일발송
            </div>
            <div className='Category-bar-menu'>
                이벤트
            </div>
            <div className='Category-bar-menu'>
                고객센터
            </div>
            <div className='Category-bar-menu-last'>
                회원가입 / 로그인 / 고객센터
            </div>
        </div>
    </div>
  )
}

export default Category