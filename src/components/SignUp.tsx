'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SignUp.module.css';

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        parentName: '',
        studentName: '',
        class: '',
        section: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        agreeToTerms: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, type, value } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.username.trim()) newErrors.username = 'Username is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
        if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
        if (!formData.class) newErrors.class = 'Class is required';
        if (!formData.section) newErrors.section = 'Section is required';
        if (!formData.address.trim()) newErrors.address = 'Address is required';
        if (!formData.city.trim()) newErrors.city = 'City is required';
        if (!formData.state.trim()) newErrors.state = 'State is required';
        if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required';
        if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'You must agree to terms and conditions';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/sign-up-side.jpg"
                        alt="School Campus"
                        fill
                        priority
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className={styles.content}>
                    <h2 className={styles.welcomeTitle}>Welcome to Our School Portal</h2>
                    <p className={styles.welcomeDesc}>
                        Manage everything from attendance to grades, all in one place.
                    </p>

                    <ul className={styles.featuresList}>
                        <li><span className={styles.icon}>✓</span> Instant Attendance Report</li>
                        <li><span className={styles.icon}>✓</span> Performance Updates</li>
                        <li><span className={styles.icon}>✓</span> Homework Notifications</li>
                        <li><span className={styles.icon}>✓</span> Mobile Application</li>
                        <li><span className={styles.icon}>✓</span> Exams & Extra Activities</li>
                        <li><span className={styles.icon}>✓</span> CCE Application</li>
                        <li><span className={styles.icon}>✓</span> Bus Location Tracking</li>
                        <li><span className={styles.icon}>✓</span> Announcements</li>
                        <li><span className={styles.icon}>✓</span> Add-ons for School Admin</li>
                    </ul>
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.formContainer}>
                    <h1 className={styles.title}>Create Your Parent Account</h1>
                    <p className={styles.subtitle}>Join our community to manage your student's progress.</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Account Information</legend>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter your username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                    {errors.username && <span className={styles.error}>{errors.username}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <span className={styles.error}>{errors.password}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Parent & Student Details</legend>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="parentName">Parent Name</label>
                                    <input
                                        type="text"
                                        id="parentName"
                                        name="parentName"
                                        placeholder="Full name"
                                        value={formData.parentName}
                                        onChange={handleChange}
                                    />
                                    {errors.parentName && <span className={styles.error}>{errors.parentName}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="studentName">Student Name</label>
                                    <input
                                        type="text"
                                        id="studentName"
                                        name="studentName"
                                        placeholder="Full name"
                                        value={formData.studentName}
                                        onChange={handleChange}
                                    />
                                    {errors.studentName && <span className={styles.error}>{errors.studentName}</span>}
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="class">Class</label>
                                    <select
                                        id="class"
                                        name="class"
                                        value={formData.class}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Class</option>
                                        <option value="1">1st</option>
                                        <option value="2">2nd</option>
                                        <option value="3">3rd</option>
                                        <option value="4">4th</option>
                                        <option value="5">5th</option>
                                        <option value="6">6th</option>
                                        <option value="7">7th</option>
                                        <option value="8">8th</option>
                                        <option value="9">9th</option>
                                        <option value="10">10th</option>
                                        <option value="11">11th</option>
                                        <option value="12">12th</option>
                                    </select>
                                    {errors.class && <span className={styles.error}>{errors.class}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="section">Section</label>
                                    <select
                                        id="section"
                                        name="section"
                                        value={formData.section}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Section</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>
                                    {errors.section && <span className={styles.error}>{errors.section}</span>}
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Contact Information</legend>

                            <div className={styles.formGroup}>
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Street Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                                {errors.address && <span className={styles.error}>{errors.address}</span>}
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                    {errors.city && <span className={styles.error}>{errors.city}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        placeholder="State / Province"
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                    {errors.state && <span className={styles.error}>{errors.state}</span>}
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="zipCode">Zip Code</label>
                                    <input
                                        type="text"
                                        id="zipCode"
                                        name="zipCode"
                                        placeholder="Zip / Postal Code"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                    />
                                    {errors.zipCode && <span className={styles.error}>{errors.zipCode}</span>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="(123) 456-7890"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                    {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
                                </div>
                            </div>
                        </fieldset>

                        <div className={styles.checkboxGroup}>
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                            />
                            <label htmlFor="agreeToTerms">
                                I agree to the <Link href="#" className={styles.link}>Terms and Conditions</Link>
                            </label>
                            {errors.agreeToTerms && <span className={styles.error}>{errors.agreeToTerms}</span>}
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Sign Up
                        </button>

                        <p className={styles.loginText}>
                            Already have an account? <Link href="/login" className={styles.link}>Log In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
