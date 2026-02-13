import { useState, useMemo, useEffect } from 'react';
import { MagnifyingGlassIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export function AdvancedSearch({ products, onFilterChange }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        category: '',
        material: '',
        sterilization: '',
        customizable: null
    });
    const [showFilters, setShowFilters] = useState(false);

    // Extract unique values for filters
    const uniqueCategories = useMemo(() =>
        [...new Set(products.map(p => p.category))], [products]
    );
    const uniqueMaterials = useMemo(() =>
        [...new Set(products.map(p => p.material))], [products]
    );
    const uniqueSterilizations = useMemo(() =>
        [...new Set(products.map(p => p.sterilization))], [products]
    );

    // Filter products based on search and filters
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Text search
            const matchesSearch = searchTerm === '' ||
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.features?.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));

            // Category filter
            const matchesCategory = !filters.category || product.category === filters.category;

            // Material filter
            const matchesMaterial = !filters.material || product.material.includes(filters.material);

            // Sterilization filter
            const matchesSterilization = !filters.sterilization || product.sterilization === filters.sterilization;

            // Customizable filter
            const matchesCustomizable = filters.customizable === null || product.customizable === filters.customizable;

            return matchesSearch && matchesCategory && matchesMaterial && matchesSterilization && matchesCustomizable;
        });
    }, [products, searchTerm, filters]);

    // Notify parent of filter changes
    useEffect(() => {
        if (onFilterChange) {
            onFilterChange(filteredProducts);
        }
    }, [filteredProducts, onFilterChange]);

    const clearAllFilters = () => {
        setSearchTerm('');
        setFilters({
            category: '',
            material: '',
            sterilization: '',
            customizable: null
        });
    };

    const activeFilterCount = Object.values(filters).filter(v => v !== '' && v !== null).length;

    return (
        <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search by product name, material, or use case..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm focus:ring-2 focus:ring-medical-500 focus:border-transparent outline-none"
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                        <XMarkIcon className="w-5 h-5" />
                    </button>
                )}
            </div>

            {/* Filter Toggle & Results Count */}
            <div className="flex items-center justify-between">
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                    <FunnelIcon className="w-4 h-4" />
                    Filters
                    {activeFilterCount > 0 && (
                        <span className="ml-1 px-2 py-0.5 bg-medical-700 text-white rounded-full text-xs">
                            {activeFilterCount}
                        </span>
                    )}
                </button>

                <div className="text-sm text-slate-600">
                    <span className="font-bold text-slate-900">{filteredProducts.length}</span> products found
                </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="font-black uppercase text-sm tracking-wider text-slate-900">Advanced Filters</h3>
                        {activeFilterCount > 0 && (
                            <button
                                onClick={clearAllFilters}
                                className="text-xs font-bold text-medical-700 hover:text-medical-900 uppercase tracking-wider"
                            >
                                Clear All
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Category Filter */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Category</label>
                            <select
                                value={filters.category}
                                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                                className="w-full bg-slate-50 border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-medical-500 outline-none"
                            >
                                <option value="">All Categories</option>
                                {uniqueCategories.map(cat => (
                                    <option key={cat} value={cat}>
                                        {cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Material Filter */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Material</label>
                            <select
                                value={filters.material}
                                onChange={(e) => setFilters({ ...filters, material: e.target.value })}
                                className="w-full bg-slate-50 border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-medical-500 outline-none"
                            >
                                <option value="">All Materials</option>
                                {uniqueMaterials.map(mat => (
                                    <option key={mat} value={mat}>{mat}</option>
                                ))}
                            </select>
                        </div>

                        {/* Sterilization Filter */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Sterilization</label>
                            <select
                                value={filters.sterilization}
                                onChange={(e) => setFilters({ ...filters, sterilization: e.target.value })}
                                className="w-full bg-slate-50 border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-medical-500 outline-none"
                            >
                                <option value="">All Types</option>
                                {uniqueSterilizations.map(ster => (
                                    <option key={ster} value={ster}>{ster}</option>
                                ))}
                            </select>
                        </div>

                        {/* Customizable Filter */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Customization</label>
                            <select
                                value={filters.customizable === null ? '' : filters.customizable.toString()}
                                onChange={(e) => setFilters({
                                    ...filters,
                                    customizable: e.target.value === '' ? null : e.target.value === 'true'
                                })}
                                className="w-full bg-slate-50 border-0 rounded-lg p-3 text-sm focus:ring-2 focus:ring-medical-500 outline-none"
                            >
                                <option value="">All Products</option>
                                <option value="true">Customizable Only</option>
                                <option value="false">Standard Only</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}

            {/* Search Results */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-16 bg-slate-50 rounded-2xl">
                    <p className="text-slate-500 mb-4">No products match your search criteria.</p>
                    <button
                        onClick={clearAllFilters}
                        className="text-medical-700 font-bold hover:text-medical-900"
                    >
                        Clear filters to see all products
                    </button>
                </div>
            )}
        </div>
    );
}

// Quick Search Suggestions Component
export function SearchSuggestions({ query, products }) {
    if (!query || query.length < 2) return null;

    const suggestions = products
        .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 5);

    if (suggestions.length === 0) return null;

    return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
            {suggestions.map(product => (
                <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors border-b last:border-0"
                >
                    <div className="w-12 h-12 bg-slate-100 rounded-lg"></div>
                    <div>
                        <p className="font-bold text-sm text-slate-900">{product.name}</p>
                        <p className="text-xs text-slate-500">{product.category}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
