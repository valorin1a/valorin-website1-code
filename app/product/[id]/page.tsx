import React from 'react';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductDetail from '@/components/ProductDetail';

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/shop" className="btn btn-primary">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    return <ProductDetail product={product} />;
}
