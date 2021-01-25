import { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)

    const { loading, error, products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            {
                loading ? <LoadingBox />
                    :
                    error ? <MessageBox>{error.message}</MessageBox>
                        :
                        (<div className="row center">
                            {
                                products.map(product => {
                                    return (
                                        <Product key={product._id} product={product} />
                                    )
                                })
                            }

                        </div>)

            }

        </>
    )
}

export default HomeScreen
