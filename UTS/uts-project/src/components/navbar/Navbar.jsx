import {
    Box,
    Flex,
    Button,
    Text,
    IconButton,
    Avatar,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    HStack,
    Icon,
    Badge
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    SunIcon,
    MoonIcon
} from '@chakra-ui/icons';

import {
    FiShoppingCart
} from 'react-icons/fi'

import {
    useDispatch,
    useSelector
} from 'react-redux';

import { actFetchCartNumber } from '../../actions/products';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actFetchCartNumber())
    }, [])

    const numberCart = useSelector((state) => state._todoProduct.numberCart)

    return (
        
        <div class="  navbar-expand-lg navbar-light shadow align-self-center navbar-collapse  " id="templatemo_main_nav">
                
                  <div class="flex-fill">
                      <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                      <a class="navbar-brand text-success logo h2 align-self-center" href="#">
                  Hitachi Store
                  </a>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/product">Product</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About Us</Link>
                    </li>
                    <li>
                        <HStack
                            flex={{ base: 1, md: 0 }}
                            justify={'flex-end'}
                            alignItems={'right'}
                            spacing={2}>
                            <Link to='/cart'>
                                <Button variant={'ghost'}>
                                    <Icon
                                        as={FiShoppingCart}
                                        w={5}
                                        h={5}
                                        color={useColorModeValue('gray.800', 'white')}
                                        mt={3} />
                                    <Badge
                                        colorScheme={'blue'}
                                        ml={-1}
                                        fontSize={'md'}>
                                        {numberCart}
                                    </Badge>
                                </Button>
                            </Link>
                        </HStack>
                    </li>

                </ul>

                {/* <Switch>
                <Route path="/public">
                    <PublicPage />
                </Route>

                <Route path="/login">
                    <LoginPage />
                </Route>
                <PrivateRoute path="/collection">
                    <NestCollection />
                </PrivateRoute>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <PublicPage />
                </Route>

            </Switch> */}

            </div>

        </div>
    );
}

export default Navbar;