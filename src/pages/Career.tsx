import { useState } from "react";
import { Upload, Send, Users, Award, TrendingUp, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";


const Career = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    location: "",
    salary: "",
    coverLetter: "",
    terms: false,
    resume: null as File | null,
    portfolio: [] as File[]
  });


  const [isSubmitting, setIsSubmitting] = useState(false);

    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.position || !formData.coverLetter || !formData.terms) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and accept the terms.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and get back to you soon.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      education: "",
      location: "",
      salary: "",
      coverLetter: "",
      terms: false,
      resume: null,
      portfolio: []
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'portfolio') => {
    const files = event.target.files;
    if (!files) return;

    if (type === 'resume') {
      const file = files[0];
      if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
        setFormData(prev => ({ ...prev, resume: file }));
        toast({
          title: "Resume uploaded successfully!",
          description: `File: ${file.name}`,
        });
      } else {
        toast({
          title: "File too large",
          description: "Resume must be under 5MB",
          variant: "destructive"
        });
      }
    } else {
      const fileArray = Array.from(files);
      setFormData(prev => ({ ...prev, portfolio: fileArray }));
      toast({
        title: "Portfolio files uploaded!",
        description: `${fileArray.length} file(s) selected`,
      });
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with industry experts and talented professionals in a supportive team environment."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Comprehensive training programs and clear career advancement opportunities."
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, health insurance, and professional development support."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, annual leave, and employee wellness programs."
    }
  ];

  const positions = [
    "Senior Geologist",
    "Environmental Scientist",
    "Marine Geophysicist",
    "Geochemist",
    "Project Manager",
    "Field Engineer",
    "Laboratory Technician",
    "GIS Specialist",
    "Business Development Manager",
    "Administrative Assistant",
    "Other"
  ];

  const experienceLevels = [
    "Entry Level (0-2 years)",
    "Mid Level (3-5 years)",
    "Senior Level (6-10 years)",
    "Expert Level (10+ years)"
  ];

  const educationLevels = [
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Professional Certification",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your career with Nigeria's leading geological and environmental consulting firm
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose GeoTerrain?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to fostering talent and providing opportunities for professional growth in a dynamic, innovative environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Apply for a Position</CardTitle>
                <CardDescription>
                  Fill out the application form below to join our team of experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Professional Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="position">Position Applied For *</Label>
                        <Select onValueChange={(value) => handleInputChange("position", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((position) => (
                              <SelectItem key={position} value={position}>
                                {position}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Select onValueChange={(value) => handleInputChange("experience", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            {experienceLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="education">Education Level</Label>
                        <Select onValueChange={(value) => handleInputChange("education", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            {educationLevels.map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Preferred Location</Label>
                        <Input
                          id="location"
                          type="text"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="e.g., Lagos, Abuja, Remote"
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <Label htmlFor="salary">Expected Salary Range (Optional)</Label>
                      <Input
                        id="salary"
                        type="text"
                        value={formData.salary}
                        onChange={(e) => handleInputChange("salary", e.target.value)}
                        placeholder="e.g., ₦200,000 - ₦400,000 per month"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Documents</h3>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload your resume/CV (PDF, DOC, DOCX - Max 5MB)
                        </p>
                        <input
                          type="file"
                          id="resume-upload"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange(e, 'resume')}
                          className="hidden"
                        />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          type="button"
                          onClick={() => document.getElementById('resume-upload')?.click()}
                        >
                          Choose File
                        </Button>
                        {formData.resume && (
                          <p className="text-sm text-green-600 mt-2">
                            ✓ {formData.resume.name}
                          </p>
                        )}
                      </div>
                      
                      <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload portfolio/certificates (Optional)
                        </p>
                        <input
                          type="file"
                          id="portfolio-upload"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          multiple
                          onChange={(e) => handleFileChange(e, 'portfolio')}
                          className="hidden"
                        />
                        <Button 
                          variant="outline" 
                          size="sm" 
                          type="button"
                          onClick={() => document.getElementById('portfolio-upload')?.click()}
                        >
                          Choose Files
                        </Button>
                        {formData.portfolio.length > 0 && (
                          <p className="text-sm text-green-600 mt-2">
                            ✓ {formData.portfolio.length} file(s) selected
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Cover Letter *</h3>
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter">Tell us why you want to join GeoTerrain</Label>
                      <Textarea
                        id="coverLetter"
                        value={formData.coverLetter}
                        onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                        placeholder="Describe your interest in the position, relevant experience, and what you can bring to our team..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                    />
                    <div className="text-sm">
                      <Label htmlFor="terms" className="cursor-pointer">
                        I agree to the terms and conditions and consent to the processing of my personal data for recruitment purposes. *
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            If you have any questions about our open positions or the application process, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact HR Team
            </a>
            <a 
              href="mailto:supportgroup@geoterrainltd.com" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Email: supportgroup@geoterrainltd.com
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Career;