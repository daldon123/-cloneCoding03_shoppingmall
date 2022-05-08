import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Topbar = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));
      
  return (
    <div className='Topbar'>
        <div className='Topbar-left'>
            <img className='Topbar-logo' src="logo.png" alt='logo'/>
            <div className='Topbar-title'>Hong's SHOP</div>
        </div>
        <div className='Topbar-center'>
            <div className='Topbar-searchbox'>
                <input className='Topbar-search-input' type="text" />
                <SearchIcon className='Topbar-search-SearchIcon'/>
            </div>
        </div>
        <div className='Topbar-right'>
            <div className='Topbar-righticons'>
                <LoginIcon/>
                <p>로그인</p>
            </div>
            <div className='Topbar-righticons'>
                <GroupAddIcon/>
                <p>회원가입</p>
            </div>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>
        </div>
    </div>
  )
}

export default Topbar